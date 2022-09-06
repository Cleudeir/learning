import './FeaturedMovie.css'
import React from 'react';

export default ({item}) => {

    let fristDate =new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }

return(
    <section className="featured" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` 
    }} >
        <div className="featured--Vertical">
            <div className="featured--horizontal">
            <div className="featured--name">{item.original_name}</div>
            <div className="featured--info">
                <div className="featured--points">{item.vote_average} pontos</div>
                <div className="featured--year">{fristDate.getFullYear()}</div>
                <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's':''}</div>
            </div>
            <div className="featured--description">{item.overview.length > 300 ? item.overview.substring(0,300)+'...':item.overview}</div> 
            <div className="featured--buttons">
                <a href={item.id} className='featured--watch'>► Assistir</a>
                </div> 
                <div className="featured--generes">
                    <strong>Gêneros: </strong>
                    {genres.join(', ')}
            </div>
        </div>
        </div>
    </section>
)
}