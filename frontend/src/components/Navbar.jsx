import { LogOut, Menu, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/authUser";
import { useContentStore } from "../store/content";

const Navbar = () => {
  const { user, signout } = useAuthStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const { setContentType } = useContentStore();
  const [activeTab, setActiveTab] = useState("movie");

  useEffect(() => {
    if (location.pathname.includes("/history")) {
      setActiveTab("search");
    } 
  }, [location.pathname]);

  const handleTabClick = (tab) => {
    if (tab !== "search") {
      setContentType(tab);
    }
    setActiveTab(tab);
  };

  return (
    <header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20 ">
      <div className="flex items-center gap-10 z-50">
        <Link to="/">
          <img src="/logo.png" alt="Netflix Logo" className="w-28 sm:w-40" />
        </Link>

        <div className="hidden sm:flex gap-2 items-center">
        <Link
            to="/"
            className={`hover:underline ${activeTab === "movie" ? "text-red-500" : ""}`}
            onClick={() => handleTabClick("movie")}
          >
            Movies
          </Link>

          <Link
            to="/"
            onClick={() => handleTabClick("tv")}
            className={`hover:underline ${activeTab === "tv" ? "text-red-500" : ""}`}
            
          >
            TV Shows
          </Link>

          <Link
            to="/history"
            className={`hover:underline ${activeTab === "search" ? "text-red-500" : ""}`}
            onClick={() => handleTabClick("search")}
          >
            Search History
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4 z-50">
        <Link to={"/search"}>
          <Search className="size-6 cursor-pointer" />
        </Link>

        <img
          src={user.image || "/avatar2.jpg"}
          alt="Avatar"
          className="h-8 rounded cursor-pointer"
        />

        <LogOut className="size-6 cursor-pointer" onClick={signout} />

        <div className="sm:hidden">
          <Menu
            className="size-6 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="w-full sm:hidden bg-black text-white flex flex-col mt-4 border rounded border-gray-800  ">
           <Link
            to="/"
            className={`hover:underline ${activeTab === "movie" ? "text-red-500" : ""}`}
            onClick={() => handleTabClick("movie")}
          >
            Movies
          </Link>

          <Link
            to="/"
            onClick={() => handleTabClick("tv")}
            className={`hover:underline ${activeTab === "tv" ? "text-red-500" : ""}`}
            
          >
            TV Shows
          </Link>

          <Link
            to="/history"
            className={`hover:underline ${activeTab === "search" ? "text-red-500" : ""}`}
            onClick={() => handleTabClick("search")}
          >
            Search History
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
