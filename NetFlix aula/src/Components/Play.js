import React from 'react';

export default ({Id}) =>{
     //const urlbase = "https://embed.querofilmeshd.co/tv/";     
     //const urlbase ="https://play.midiaflixhd.com/tv/"
     const urlbase = "https://player.uauflix.online/tv/"
     console.log('Id: ',Id)
        return(
            <iframe src={urlbase+Id}></iframe>
            )

    
}
