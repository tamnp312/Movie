import fetchFromTMDB from "../services/tmdb.service.js";

const getTrendingTv = async (req, res) => {
    try {
        const data = await fetchFromTMDB('https://api.themoviedb.org/3/trending/tv/day?language=en-US');
        const randomTvShow = data.results[Math.floor(Math.random() * data.results?.length)];

        res.json( {
            success: true,
            content: randomTvShow
        })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch trending tv' });
    }
}

const getTvShowTrailers = async (req, res) => { 
    try {
        const { series_id } = req.params; 
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${series_id}/videos?language=en-US`);

        if(data.results.length === 0) {
            return res.status(404).json({ success: false, message: 'Trailer not found' });
        }

        res.json({
            success: true,
            trailers: data.results 
        });
    } catch (error) {
        if(error.message.includes("404")) {
            return res.status(404).json({ success: false, message: 'Trailer not found' });
        }
        res.status(500).json({ success: false, message: 'Failed to fetch trailer' });
    }
}

const  getTvShowDetails = async (req, res) => {
     try {
        const {series_id} = req.params;

        const data  =  await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${series_id}?language=en-US`);
        if(data.status === 404) {
            return res.status(404).json({ success: false, message: 'Movie not found' });
        }
        res.json({
            success: true,
            details: data   
        });
     } catch (error) {
        if(error.message.includes("404")) {
            return res.status(404).json({ success: false, message: 'TV show details not found' });
        }
        res.status(500).json({ success: false, message: 'Failed to fetch movie details' });
        
     }
}; 

const  getSimilerTvShows = async (req, res) => { 
    try {
        const {series_id} = req.params;
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${series_id}/similar?language=en-US`);
        res.json({
            success: true,
            similar: data.results
        });
    } catch (error) {
        if(error.message.includes("404")) {
            return res.status(404).json({ success: false, message: 'Similer TV shows not found' });
        }
        res.status(500).json({ success: false, message: 'Failed to fetch similer Tv shows' });
    }
};

const getTvShowsByCategory  = async (req, res) => {
    try {
        const {category} = req.params;
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US`);
        res.json({
            success: true,
            content: data.results
        });
    } catch (error) {
        if(error.message.includes("404")) {
            return res.status(404).json({ success: false, message: 'TV shows not found' });
        }
        res.status(500).json({ success: false, message: 'Failed to fetch tv shows' });
    }
};
export { getTrendingTv  , getTvShowTrailers ,getTvShowDetails ,getSimilerTvShows , getTvShowsByCategory};