import './Css/App.css';
import React, { useState, useEffect } from 'react';
import RequestApi from './RequestApi'
import SearchSumaryPlayer from './RequestApi/SearchSumaryPlayers'
const App =  ()=> {
  const [datePlayer, setDatePlayer] = useState(false);
  const [datePlayers, setDatePlayers] = useState(false);
  const [delay, setDelay] = useState(false);
  const [value, setValue] = useState([87683422]);
  const apiKey = '048776627077105958873BA4C749CEFF'
  const hostUrl = 'http://api.steampowered.com'
  const proxy = 'https://thingproxy.freeboard.io/fetch/'
  //const proxy = ''
  const gameMode = 18
  
  const input =(e)=>{
    const {value}  = e.target
    setValue([parseInt(value)])}
    
    const button = async()=>{
      
      if(value){
        console.log('click')
        setDelay(true)
        console.log(value)
        let {players} = await RequestApi({value,apiKey,hostUrl,proxy,gameMode})
        console.log(players)
        setDatePlayers(players)
        setDelay(false)
        /*let player = await SearchSumaryPlayer({value,apiKey,hostUrl,proxy,gameMode})
        
        if(player.length !== 0){
          setDatePlayer(player[0])
        }
        else{
          setDatePlayer(player)
        }
      */
      }
    }
    useEffect(() => {
      
      
    },[]);
    
    return (
      <div className="App">
      <div>
      <input type='number' onChange={input} placeholder='ID DOTA'/>
      <button onClick={button} type='button'>Buscar</button>
      </div>
      
      <div className='result'>
      {datePlayer === 'error' &&
      <>Erro</>}
      {datePlayer && datePlayer.length !== 0 &&
        <>
        <div className='cabecalho'>
        <a href={datePlayer.profileurl} style={{textDecoration: 'none',color:'black'}}>
        <img src={datePlayer.avatarfull} height='100%' alt='img'/>
        </a>
        <h1>{datePlayer.personaname}</h1>
        </div>
        <table className="comicGreen">
        <thead>
        <tr>
        <th><h1>Type</h1></th>
        <th><h1>value</h1></th>
        </tr>
        </thead>
        
        {
          <tbody>
          <tr>
          <td>match</td><td>{Math.ceil(datePlayer.match)}</td>
          </tr>
          <tr>
          <td>win_rate</td><td>{Math.ceil(datePlayer.win_rate)}% </td>
          </tr>
          <tr>
          <td>ranking_rate</td><td>{Math.ceil(datePlayer.ranking_rate)} </td>
          </tr>
          <tr>
          <td>media_gpm</td><td>{Math.ceil(datePlayer.media_gpm)} </td>
          </tr>
          <tr>
          <td>media_kills</td><td>{Math.ceil(datePlayer.media_kills)} </td>
          </tr>
          <tr>
          <td>media_deaths</td><td>{Math.ceil(datePlayer.media_deaths)*-1} </td>
          </tr>
          <tr>
          <td>media_last_hists</td><td>{Math.ceil(datePlayer.media_last_hists)} </td>
          </tr>
          <tr>
          <td>media_denies</td><td>{Math.ceil(datePlayer.media_denies)} </td>
          </tr>
          <tr>
          <td>media_hero_damage</td><td>{Math.ceil(datePlayer.media_hero_damage)} </td>
          </tr>
          <tr>
          <td>media_hero_healing</td><td>{Math.ceil(datePlayer.media_hero_healing)} </td>
          </tr>
          <tr>
          <td>media_net_worth</td><td>{Math.ceil(datePlayer.media_net_worth)} </td>
          </tr>
          <tr>
          <td>media_tower_damage</td><td>{Math.ceil(datePlayer.media_tower_damage)} </td>
          </tr>
          <tr>
          <td>media_assists</td><td>{Math.ceil(datePlayer.media_assists)} </td>
          </tr>
          </tbody>
        }
        
        </table>
        </>  
      }
      {datePlayer.length === 0 &&
        <>
        <h1 style={{textAlign:'center'}}>Erro na busca...</h1>
        <h2 style={{textAlign:'center'}}>Profile don't exist</h2>
        </>
      }
      
      {datePlayers.length>1 &&
        <div className='ranking'>
        <h1 style={{textAlign:'center'}}>Ranking</h1>
        <table className="blueTable">
        <thead>
        <tr>
        <th>Ranking</th>
        <th>Account_id</th>
        <th>Icon</th>
        <th>Name</th>
        <th>Ranking Rate</th>
        <th>Win Rate</th>
        </tr>
        </thead>
        <tbody>
        {datePlayers.map((x,key)=>{
          return(
            x.ranking_rate>0 &&
            <tr key={key}>
            <td>{key+1}</td><td>{x.accountid}</td> <td><img src={x.avatarfull} width="35" alt={x.personaname}/></td><td>{x.personaname}</td><td>{Math.ceil(x.ranking_rate)}</td><td>{Math.ceil(x.win_rate)}%</td>
            </tr>)
          })}
          </tbody>
          </table>
          </div>
        }
        </div>
        {delay &&
          <div style={{margin: '80px 0px',height:'50vh'}}>
          <h3>Aguarde pode demorar...</h3>
          <img src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif' alt='a'/>
          </div>
        }
        </div>
        );
      }
      
      export default App;
      