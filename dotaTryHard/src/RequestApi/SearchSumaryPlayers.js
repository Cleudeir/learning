const SteamID = require('steamid');

const SearchSumaryPlayer = async({value,apiKey,hostUrl,proxy,gameMode})=>{
    
    //global
    let result = []
    console.log(value)
    if(value.length>1 && localStorage.getItem('result')){
        result = JSON.parse(localStorage.getItem('result'))
    }
    //--
    const search = async ({accountid,steamId})=>{ 
        let obj = {
            win_rate : 0,
            ranking_rate: 0,
            media_gpm : 0,
            media_xpm : 0,
            media_kills : 0,
            media_deaths : 0,
            media_last_hists : 0,
            media_denies : 0,
            media_hero_damage : 0,
            media_hero_healing : 0,
            media_net_worth : 0,
            media_tower_damage : 0,
            media_assists : 0,
            match: 0
        }  
        //Profile account
        let profile =await fetch(`${proxy}${hostUrl}/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${steamId}`)
        .then((response)=>{return  response.json()})
        .then((data)=>{
            let x = data.response.players[0]
            console.log('search Profile')
            let {avatarfull,personaname,profileurl,steamid} = x
            let players = {avatarfull,personaname,profileurl,steamid}
            if(x!==undefined){                             
                return(players)
            }          
        })
        .catch(()=>{return false})
        
        if(!profile){
            profile = {avatarfull:'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/a8/a881079e7abf4c621e86e21116f8c0dd3ee40619_full.jpg',
            personaname:'unknown',
            profileurl:'unknown',
            steamid:steamId}
            obj.accountid = accountid
            let pre = Object.assign({}, obj, profile);
            result.push(pre);
            if(value.length>1){
                localStorage.setItem('result',JSON.stringify(result))
            }
            return (await result)
        }
        
        //Match History
        let Match_History = await fetch(`${proxy}${hostUrl}/IDOTA2Match_570/GetMatchHistory/v1?account_id=${accountid}&game_mode=${gameMode}&key=${apiKey}`)  
        
        .then(async(response)=>{return  await response.json()})
        .then((data)=>{
            console.log('search_History')
            if(data.status===15){
                return false
            }            
            let x = data.result.matches
            let z = []
            for(let j=0;j<x.length;j++){                
                let {match_id,players} = data.result.matches[j]                
                if(players.filter(x => x.account_id === accountid).length>0){
                    let y = players.filter(x => x.account_id === accountid)[0]
                    let {player_slot} = y
                    z.push({match_id,player_slot})
                }
            }            
            return(z)
        })
        .catch((e)=>{return false})       
        
        if(!Match_History){
            obj.accountid = accountid
            let pre = Object.assign({}, obj, profile);
            result.push(pre);
            if(value.length>1){
                localStorage.setItem('result',JSON.stringify(result))
            }
            return (await result)
        }
        //--
        //Wirate set
        const qnt = 50
        for( let k = 0;k<qnt;k++){
            if(Match_History[k] && Match_History[k].match_id){
                const match = async(e)=>{                                      
                    let s =  fetch(`${proxy}${hostUrl}/IDOTA2Match_570/GetMatchDetails/v1?match_id=${Match_History[e].match_id}&key=${apiKey}`)
                    .then((response)=>{return  response.json()})
                    .then((data)=>{
                        return data.result
                    })
                    .catch(()=>{return false})
                    return s
                }
                let date = await match(k)                
                if(!date){ continue }
                console.log('search_Match')
                let y = date.players.filter(x=>x.account_id === accountid)[0]            
                let {assists,gold_per_min,xp_per_min,kills,deaths,last_hits,denies,hero_damage,hero_healing,net_worth,tower_damage} = y                
                obj.media_assists += assists
                obj.media_gpm += gold_per_min
                obj.media_xpm += xp_per_min
                obj.media_kills += kills
                obj.media_deaths += deaths
                obj.media_last_hists += last_hits
                obj.media_denies += denies
                obj.media_hero_damage += hero_damage
                obj.media_hero_healing += hero_healing
                obj.media_net_worth += net_worth
                obj.media_tower_damage += tower_damage
                obj.match += 1
                if(date.radiant_win){
                    if(Match_History[k].player_slot<5){
                        obj.win_rate+=1
                    }
                }
                else{
                    if(Match_History[k].player_slot>5){
                        obj.win_rate+=1
                    }
                }
                
            }            
        }
        if(obj.match !==0){
            obj.media_assists = (obj.media_assists/obj.match)
            obj.media_gpm = (obj.media_gpm/obj.match)
            obj.media_xpm = (obj.media_xpm/obj.match)
            obj.media_kills = (obj.media_kills/obj.match)
            obj.media_deaths = (obj.media_deaths/obj.match)
            obj.media_last_hists = (obj.media_last_hists/obj.match)
            obj.media_denies = (obj.media_denies/obj.match)
            obj.media_hero_damage = (obj.media_hero_damage/obj.match)
            obj.media_hero_healing = (obj.media_hero_healing/obj.match)
            obj.media_net_worth = (obj.media_net_worth/obj.match)
            obj.media_tower_damage = (obj.media_tower_damage/obj.match)
            obj.win_rate = parseFloat((obj.win_rate/obj.match*100).toFixed(2))
        }  
        obj.accountid = accountid
        //--
        //Resultado return
        let pre_result = Object.assign({}, obj, profile);
        result.push(pre_result)
        if(value.length>1){
            localStorage.setItem('result',JSON.stringify(result))
        }        
        //--        
    }
   /* for(let i= result.length; i<value.length;i++){
        console.log('start',i,':',value.length)
        let steamId = await new SteamID(`[U:1:${value[i]}]`)
        let accountid = value[i]
        await search({accountid,steamId})
    } */
    console.log(result)
    return(await (result))
}
export default SearchSumaryPlayer;