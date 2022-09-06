import './App.css'
import React from 'react';
import Tmdb from './Tmdb';
import { useEffect } from 'react';
import { useState } from 'react';
import MovieRow from './Components/MovieRow';
import FeaturedMovie from './Components/FeaturedMovie';
import Header from './Components/Header';
import Play from './Components/Play';

export default () => {
  
  const [movieList, setmovieList] = useState([]);
  const [featureData, setfeatureData] = useState(null);
  const [styleBlack, setStyleBlack] = useState('transparent')
  const [Id, setId] = useState(null)
  
  const IdCard = (event) =>{
    setId('https://player.uauflix.online/tv/'+event.target.getAttribute('value'))
    console.log('App: ',Id)
  }
  
  useEffect(()=>{
    const loadAll = async () =>{
      //Pegando o lista
      let list = await Tmdb.getHomeList()
      setmovieList(list)
      //Pegando o Featured
      let filtrando = list.filter(i=>i.slug === 'originals')
      let n = Math.floor(Math.random()*(filtrando[0].items.results.length-1))
      let x = filtrando[0].items.results[n]
      //Envia id para Tmdb e recebe Arry com infos do filme/serie
      let escolhidoInfo = await Tmdb.getMovieInfo(x.id, 'tv')
      //--
      //enviar para tag repassar as infos para o componente
      setfeatureData(escolhidoInfo[0])
      console.log(escolhidoInfo[0],escolhidoInfo[1])
    }
    loadAll();
  },[]);
  
  useEffect(() => {
    const scrollListener = ()=>{
      if(window.scrollY>10){
        setStyleBlack('#141414')
      }
      else{setStyleBlack('transparent')}
    }
    window.addEventListener('scroll',scrollListener);
    return () => {
      window.removeEventListener('scroll',scrollListener)
      //Não entendi esta parte de remover
    }
  }, []);
  
  return(
    <div className="page">
    <Header style={styleBlack}/>
    {featureData &&
      //envia arry para componente e apos renderiza o que foi processado nele"
      <FeaturedMovie item={featureData} />
    }
    {Id != null &&
    <Play id={Id}/>
    }
    <section className='lists'>
    {movieList.map((x,key)=>(
      <MovieRow key={key} title={x.title} items={x.items} IdCard={IdCard}/>
      ))}
      </section>
      <footer>
      Feito Por Alguem <span role='img' aria-label="top">🔝</span>
      <br/>
      Direitos de imagem '$#%¨#@#'
      </footer>
      {movieList <= 0 &&
        <div className='loading'>
        <img src='https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif'/>
        </div>
      }
      </div>
      )
    }
    