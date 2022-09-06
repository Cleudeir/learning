import SearchSumaryPlayer from './RequestApi/SearchSumaryPlayers'
import SearchPlayerAD from './RequestApi/SearchPlayerAD'
//const proxy = 'https://cors-anywhere.herokuapp.com/'
const RequestApi= async ({value,apiKey,hostUrl,proxy,gameMode})=>{
    
    let playersAD = await SearchPlayerAD({apiKey,hostUrl,proxy,gameMode})
    
    value = await playersAD

    let players = await SearchSumaryPlayer({value,apiKey,hostUrl,proxy,gameMode})
    
   // localStorage.setItem('result',JSON.stringify(players)))

    let geral = {
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
        players: 0
    }
    players.map((x)=>{
        if(x.match!==0){
            geral.win_rate += x.win_rate/players.length
            geral.ranking_rate += x.ranking_rate/players.length
            geral.media_gpm += x.media_gpm/players.length
            geral.media_xpm += x.media_xpm/players.length
            geral.media_kills += x.media_kills/players.length
            geral.media_deaths += x.media_deaths/players.length
            geral.media_last_hists += x.media_last_hists/players.length
            geral.media_denies += x.media_denies/players.length
            geral.media_hero_damage += x.media_hero_damage/players.length
            geral.media_hero_healing += x.media_hero_healing/players.length
            geral.media_net_worth += x.media_net_worth/players.length
            geral.media_tower_damage += x.media_tower_damage/players.length
            geral.media_assists += x.media_assists/players.length
            geral.players += 1
        }
    })
    await players.map((x)=>{
        if(x.match!==0){    

            let x02 = 1/geral.win_rate * x.win_rate
            let x03 = 1/geral.media_gpm * x.media_gpm
            let x04 = 1/geral.media_xpm * x.media_xpm
            let x05 = 1/geral.media_kills * x.media_kills
            let x06 = 1/geral.media_deaths * x.media_deaths
            let x07 = 1/geral.media_last_hists * x.media_last_hists
            let x08 = 1/geral.media_denies * x.media_denies
            let x09 = 1/geral.media_hero_damage * x.media_hero_damage
            let x10 = 1/geral.media_hero_healing * x.media_hero_healing
            let x11 = 1/geral.media_net_worth * x.media_net_worth
            let x12 = 1/geral.media_tower_damage * x.media_tower_damage
            let x13 = 1/geral.media_assists * x.media_assists   
            console.log({x02,x03,x13})         
            x.ranking_rate = parseFloat((x02 * (x03 + x04 + x05 + x06 + x07 + x08 + x09 + x10 + x11 + x12 + x13)/11*1000).toFixed(0))            
        }
    })

    players.sort(function compare(a, b) {
        if (a.ranking_rate > b.ranking_rate) return -1;
        if (a.ranking_rate < b.ranking_rate) return 1;
        return 0;
    })
    console.log({geral,players})
    return({players})
}
export default RequestApi;