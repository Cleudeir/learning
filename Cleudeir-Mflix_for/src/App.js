import React from 'react';
import Tmdb from './Tmdb';
import { useEffect } from 'react';
import { useState } from 'react';
import MovieRow from './Components/MovieRow';
import './App.css'
import FeaturedMovie from './Components/FeaturedMovie';
import Header from './Components/Header';
import { specialChars } from '@testing-library/user-event';

export default () => {
  
  const [movieList, setmovieList] = useState([]);
  const [featureData, setfeatureData] = useState(null);
  const [styleBlack, setStyleBlack] = useState('transparent')
  console.log(featureData)
  useEffect(()=>{
    const loadAll = async () =>{
      //Pegando o lista
      let list = await Tmdb.getHomeList()
      setmovieList(list)
      //Pegando o Featured
      let filtrando = list.filter(i=>i.slug === 'originals')
      let randomizar = Math.floor(Math.random()*(filtrando[0].items.results.length-1))
      let escolhidoAleatorio = filtrando[0].items.results[randomizar]
      let escolhidoInfo = await Tmdb.getMovieInfo(escolhidoAleatorio.id, 'tv')
      setfeatureData(escolhidoInfo)
     
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
        <FeaturedMovie item={featureData} />
      }
      
        <section className='lists'>
    {movieList.map((x,key)=>(
      <MovieRow key={key} title={x.title} items={x.items}/>
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
    