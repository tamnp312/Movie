import User from "../models/user.model.js";
import fetchFromTMDB from "../services/tmdb.service.js";

const searchPerson = async (req, res) => {
  try {
    const { query } = req.params;
    const response = await fetchFromTMDB(
        `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
      );
      
    if (response.results.length === 0) {
      return res.status(404).json({ message: "No results found" });
    }

    const user = await User.findById(req.user._id);
    const personId = response.results[0].id;
    const isExist = user.searchHistory.some((entry) => entry.id === personId);


    if (!isExist) {
        await User.findByIdAndUpdate(req.user._id, {
          $push: {
            searchHistory: {
              id: personId,
              image: response.results[0].profile_path,
              title: response.results[0].name,
              searchType: "person",
              createdAt: new Date(),
            },
          },
        });
      }
      

    res.status(200).json({ success: true, content: response.results });
  } catch (error) {
    console.log("Error in searchPerson controller: ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const searchMovie = async (req, res) => {
    const { query } = req.params;
	try {
		const response = await fetchFromTMDB(
			`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
		);

		if (response.results.length === 0) {
			return res.status(404).send(null);
		}

        const user = await User.findById(req.user._id);
        const movieId = response.results[0].id;
        const isExist = user.searchHistory.some((entry) => entry.id === movieId);

        if(!isExist) {
            await User.findByIdAndUpdate(req.user._id, {
                $push: {
                    searchHistory: {
                        id: response.results[0].id,
                        image: response.results[0].poster_path,
                        title: response.results[0].title,
                        searchType: "movie",
                        createdAt: new Date(),
                    },
                },
            });
        }
    
        

		res.status(200).json({ success: true, content: response.results });
	} catch (error) {
		console.log("Error in searchPerson controller: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};

const searchTV = async (req, res) => {  
    try {
        const { query } = req.params;
        const response = await fetchFromTMDB(
        `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
        );
        if (response.results.length === 0) {
        return res.status(404).json({ message: "No results found" });
        }

        const user = await User.findById(req.user._id);
        const TVId = response.results[0].id;
        const isExist = user.searchHistory.some((entry) => entry.id === TVId);

        if(!isExist) {
            await User.findByIdAndUpdate(req.user._id, {
                $push: {
                    searchHistory: {
                        id: response.results[0].id,
                        image: response.results[0].poster_path,
                        title: response.results[0].name,
                        searchType: "tv",
                        createdAt: new Date(),
                    },
                },
            });
        }
        res.status(200).json({ success: true, content: response.results });
    } catch (error) {
        console.log("Error in searchTV controller: ", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const getSearchHistory = async (req, res) => {
    try {
		res.status(200).json({ success: true, content: req.user.searchHistory });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};

const removeItemFromSearchHistory = async (req, res) => { 
    try {
        let { id } = req.params;
        id = parseInt(id);
    
        await User.findByIdAndUpdate(req.user._id, {
            $pull: {
                searchHistory: { id: id },
            },
        });

        res.status(200).json({ success: true, message: "Item removed from search history" });

    } catch (error) {
        console.log("Error in removeItemFromSearchHistory controller: ", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    } 
};

export { searchPerson , searchMovie , searchTV, getSearchHistory, removeItemFromSearchHistory };
