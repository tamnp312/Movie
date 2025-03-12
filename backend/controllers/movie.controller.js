import fetchFromTMDB from "../services/tmdb.service.js";

const getTrendingMovie = async (req, res) => {
    try {
        const data = await fetchFromTMDB('https://api.themoviedb.org/3/trending/movie/day?language=en-US');
        const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

        res.json( {
            success: true,
            content: randomMovie
        })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch trending movie' });
    }
}

const getMovieTrailers = async (req, res) => { 
    try {
        const { movieId } = req.params; 
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`);

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

const  getMovieDetails = async (req, res) => {
     try {
        const {movieId} = req.params;

        const data  =  await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`);
        if(data.status === 404) {
            return res.status(404).json({ success: false, message: 'Movie not found' });
        }
        res.json({
            success: true,
            details: data   
        });
     } catch (error) {
        if(error.message.includes("404")) {
            return res.status(404).json({ success: false, message: 'Movie details not found' });
        }
        res.status(500).json({ success: false, message: 'Failed to fetch movie details' });
        
     }
}; 

const  getSimilerMovies = async (req, res) => { 
    try {
        const {movieId} = req.params;
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US`);
        res.json({
            success: true,
            similerMovies: data.results
        });
    } catch (error) {
        if(error.message.includes("404")) {
            return res.status(404).json({ success: false, message: 'Similer movies not found' });
        }
        res.status(500).json({ success: false, message: 'Failed to fetch similer movies' });
    }
};

const getMoviesByCategory  = async (req, res) => {
    try {
        const {category} = req.params;
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US`);
        res.json({
            success: true,
            movies: data.results
        });
    } catch (error) {
        if(error.message.includes("404")) {
            return res.status(404).json({ success: false, message: 'Movies not found' });
        }
        res.status(500).json({ success: false, message: 'Failed to fetch movies' });
    }
};
export { getTrendingMovie  , getMovieTrailers ,getMovieDetails ,getSimilerMovies , getMoviesByCategory};