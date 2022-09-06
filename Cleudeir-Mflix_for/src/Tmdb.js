
const API_KEY = "5417af578f487448df0d4932bc0cc1a5";
const API_BASE = 'https://api.themoviedb.org/3';
const API_CONC = `language=pt-BR&api_key=${API_KEY}`
/*
-originais 
-recomendados (trending)
-em alta(top rated)
-ação
-terror
-terror
-romance
-documentários
*/

const basicfetch = async(props) => {
    const req = await fetch(`${API_BASE}${props}`)
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async() =>{
        return[
            {
                slug:'originals',
                title:'Originais do Netflix',
                items: await basicfetch(`/discover/tv?with_network=213&${API_CONC}`)
            },
            {
                slug:'trending',
                title:'Recomendados para Você',
                items: await basicfetch(`/trending/all/week?${API_CONC}`)
            },
            {
                slug:'toprated',
                title:'Em alta',
                items: await basicfetch(`/movie/top_rated?${API_CONC}`)
            },
            {
                slug:'action',
                title:'Ação',
                items: await basicfetch(`/discover/movie?with_genres=28&${API_CONC}`)
            },
            {
                slug:'comedy',
                title:'comédia',
                items: await basicfetch(`/discover/movie?with_genres=35&${API_CONC}`)
            },
            {
                slug:'horror',
                title:'Terror',
                items: await basicfetch(`/discover/movie?with_genres=27&${API_CONC}`)
            },
            {
                slug:'romance',
                title:'Romance',
                items: await basicfetch(`/discover/movie?with_genres=10749&${API_CONC}`)
            },
            {
                slug:'documentary',
                title:'Documentário',
                items: await basicfetch(`/discover/movie?with_genres=99&${API_CONC}`)
            },
        ];
    },
    getMovieInfo: async (movieId, type) =>{
        let info = {};
        if(movieId) {
            switch(type) {
                case 'movie':
                info = await basicfetch(`/movie/${movieId}?${API_CONC}`)
                break;
                case 'tv':
                info = await basicfetch(`/tv/${movieId}?${API_CONC}`)
                break;
                default:
                    info=null;
                break;
            }
        }
        return info;
    }
}