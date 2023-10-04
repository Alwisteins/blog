"use client";
import Link from "next/link";
import React, { useState } from "react";
import CategoriesPopup from "../Popup/CategoriesPopup";

type Urls = { target: string; title: string }[];

const urls: Urls = [
  {
    target: "/",
    title: "Home",
  },
  {
    target: "/",
    title: "Categories",
  },
  {
    target: "/write",
    title: "Write",
  },
  {
    target: "/login",
    title: "Login",
  },
  {
    target: "/about",
    title: "About",
  },
];

export default function Navbar() {
  // handle popup categories
  const [showCategories, setShowCategories] = useState(false);
  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  //handle onclick navbar
  const [isActive, setIsActive] = useState("");
  const toggleIsActive = (navlink: string) => {
    setIsActive(navlink);
  };

  return (
    <>
      <nav className="flex justify-between items-center h-14 px-3">
        <h1 className="font-bold text-lg">SteinsLibrary</h1>
        <ul className="flex space-x-4">
          {urls.map((url) => (
            <li key={url.title} className="list-none">
              {url.title === "Categories" ? (
                <button
                  onClick={toggleCategories}
                  className={`${
                    showCategories ? "text-amber-600" : "text-black"
                  }`}
                >
                  {url.title}
                </button>
              ) : (
                <Link
                  href={url.target}
                  className={`${
                    isActive === url.title ? "text-amber-600" : "text-black"
                  }`}
                  onClick={() => toggleIsActive(url.title)}
                >
                  {url.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {showCategories && (
        <CategoriesPopup setShowCategories={setShowCategories} />
      )}
    </>
  );
}
