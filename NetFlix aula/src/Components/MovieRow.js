import './MovieRow.css'
import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useState } from 'react';

export default ({items, title, IdCard}) => {
    const [scrollX, setScrollX] = useState(-400)
    const handleLeftArrow = () =>{
        let x = scrollX + Math.round(window.innerWidth/2);
        if(x>0){
            x = 0;
        }
        setScrollX(x)
    }
    const handleRightArrow = () =>{
        let x = 0
        let tamanhoMax = -items.results.length*150+window.innerWidth-60
        if( tamanhoMax < scrollX){ 
            if((scrollX - tamanhoMax) < window.innerWidth){
                x = tamanhoMax
            }
            else{
                x = scrollX - window.innerWidth*2/3
            }
        }
        else{
            x = tamanhoMax;
        }
        setScrollX(x)
    }
    
    
    return (
        <div className='movieRow'>
        <h2>{title}</h2>
        <div className='movieRow--left' onClick={handleLeftArrow}>
        <ArrowBackIosIcon style={{fontSize:50}}/>
        </div>
        <div className='movieRow--right' onClick={handleRightArrow}>
        <ArrowForwardIosIcon style={{fontSize:50}}/>
        </div>
        <div className="movieRow--listarea">
        <div className="movieRow--list" style={{
            marginLeft: scrollX,
            width: items.results.length * 160,
        }}>
        {items.results.length > 0 && items.results.map((x, key)=>(
            <div key={key} className="movieRow--item" >
            <img src={`https://image.tmdb.org/t/p/w300${x.poster_path}`} alt={x.original_title} value={x.id} onClick={IdCard}/>
        </div>
        ))}
        </div>
        </div>
        </div>
        )
    }