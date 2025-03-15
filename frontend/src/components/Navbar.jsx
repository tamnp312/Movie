import { LogOut, Menu, Search } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authUser";
import { useContentStore } from "../store/content";

const Navbar = () => {
  const { user, signout } = useAuthStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const {  setContentType} = useContentStore();

 
  return (
    <header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20 ">
      <div className="flex items-center gap-10 z-50">
        <Link to="/">
          <img
            src="/netflix-logo.png"
            alt="Netflix Logo"
            className="w-28 sm:w-40"
          />
        </Link>

        <div className="hidden sm:flex gap-2 items-center">
          <Link to="/" className="hover:underline " onClick={() => setContentType("movie")}>
            Movies
          </Link>

          <Link to="/" className="hover:underline " onClick={() => setContentType("tv")}>
            TV Shows
          </Link>

          <Link to="/history" className="hover:underline">
            Search History
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-2 z-50">
        <Link to ={"/search"}>
          <Search className="size-6 cursor-pointer" />
        </Link>

        <img
          src={user.image || "/avatar1.png"}
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
          <Link to="/" className="hover:underline  p-2  " onClick={() => setContentType("movie") }>
            Movies
          </Link>

          <Link to="/" className="hover:underline  p-2 " onClick={() => setContentType("tv") }>
            TV Shows
          </Link>

          <Link to="/history" className="hover:underline  p-2">
            Search History
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
