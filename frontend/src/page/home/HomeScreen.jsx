import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Info, Play } from "lucide-react";
import useTrendingContent from "../../hooks/useTrendingContent";
import { MOVIE_CATEGORIES, ORIGINAL_IMG_BASE_URL, TV_CATEGORIES } from "../../utils/constants";
import { Link } from "react-router-dom";
import { useContentStore } from "../../store/content";
import MovieSlider from "../../components/MovieSlider";

const HomeScreen = () => {
  const { trendingContent } = useTrendingContent();
  const [imgLoading, setImgLoading] = useState(true);
  const {contentType} = useContentStore();

  if (!trendingContent)
		return (
			<div className='h-screen text-white relative'>
				<Navbar />
				<div className='absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center -z-10 shimmer' />
			</div>
		);

  return (
    <>
      <div className="relative h-screen  text-white ">
        <Navbar />

        {imgLoading && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center shimmer -z-10" />
        )}

        <img
          src={ORIGINAL_IMG_BASE_URL + trendingContent?.backdrop_path}
          alt="hero-img"
          className="absolute top-0 left-0 -z-50 object-cover w-full h-full"
          onLoad={() => setImgLoading(false)}
        />

        <div
          className="absolute top-0 left-0 -z-50 bg-black/50 w-full h-full"
          aria-hidden="true"
        ></div>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32">
          <div className="bg-gradient-to-b from-black/70 via-black/50 to-transparent absolute top-0 left-0 w-full h-full -z-10"></div>

          <div className="max-w-2xl">
            <h1 className="mt-4 text-6xl font-extrabold text-balance">
              {trendingContent?.title || trendingContent?.name}
            </h1>
            <p className="mt-2 text-lg">
              {trendingContent?.release_date || trendingContent?.first_air_date}{" "}
              | {trendingContent?.adult ? "18+" : "PG-13"}{" "}
            </p>
            <p className="mt-2 text-lg">
              {trendingContent?.overview.length > 200
                ? trendingContent?.overview.slice(0, 200) + "..."
                : trendingContent?.overview}
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            {/* Nút Play */}
            <Link to = {`/watch/${trendingContent?.id}`}> 
            <button className="flex items-center gap-2 px-6 py-2 bg-white text-black font-bold rounded-md shadow-md hover:bg-white/80 transition">
              <Play className="size-6 fill-black" />
              Play
            </button>
            </Link>
           

            {/* Nút More Info */}
            <Link to = {`/watch/${trendingContent?.id}`}>
            <button className="flex items-center gap-2 px-6 py-2 bg-gray-500/50 text-white font-bold rounded-md shadow-md hover:bg-gray-500/80 transition">
              <Info className="size-6 text-white" />
              More Info
            </button>
            </Link>
           
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 bg-black py-10">
        {contentType === "movie" ? MOVIE_CATEGORIES.map((category) => <MovieSlider key={category} category={category}/>) 
        : TV_CATEGORIES.map((category) => <MovieSlider key={category} category={category}/>)}
      </div>

    </>
  );
};

export default HomeScreen;
