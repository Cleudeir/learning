import { PlayersId } from "../Results/PlayersId"

const SearchPlayerAD = async ({apiKey,hostUrl,proxy,gameMode})=>{
    console.log('SearchPlayerAD')
    let value = PlayersId
    const search = async ()=>{
        let playerAdSet = new Set()
        let playerAdUnicos = []
        let PlayerOrder = []
        
        for(let i=0;i<value.length;i++){
            let a = await fetch(`${proxy}${hostUrl}/IDOTA2Match_570/GetMatchHistory/v1/?account_id=${value[i]}&game_mode=${gameMode}&key=${apiKey}`)
            .then((response)=>{return  response.json()})
            .then((data)=>{
                console.log('PlayerAD : ',value.length)
                let x = data.result.matches
                if(x !== undefined){
                    for(let i=0; i<x.length;i++){
                        for(let j=0; j<x[i].players.length;j++){  
                            playerAdSet.add(x[i].players[j].account_id)
                        }
                    }
                }
            })
            .catch(()=>{return undefined});
        }
        playerAdSet.forEach(x=>playerAdUnicos.push(x))
        PlayerOrder = playerAdUnicos.sort()
        
        
        return (await PlayerOrder)
    }
    let result = []
    if(!localStorage.getItem('PlayerAD')){
    const compilation  = await search()
    result = await compilation.sort()
    }
    else{
        result = JSON.parse(localStorage.getItem('PlayerAD'))
    }
    localStorage.setItem('PlayerAD',JSON.stringify(result))
    localStorage.setItem('N',JSON.stringify(value.length))
    return(await result)
}
export default SearchPlayerAD;