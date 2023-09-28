"use client";
import Link from "next/link";
import React, { useState } from "react";

type Urls = { target: string; title: string }[];

const urls: Urls = [
  {
    target: "/",
    title: "Home",
  },
  {
    target: "/categories",
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

const CategoriesModal = [
  { title: "Types", list: ["Book", "Article"] },
  {
    title: "Tags",
    list: [
      "Economic",
      "Anime",
      "Philosophy",
      "Technologies",
      "History",
      "Film",
      "Islamic",
      "Politic",
    ],
  },
];

export default function Navbar() {
  const [showCategories, setShowCategories] = useState(false);
  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };
  return (
    <>
      <nav className="flex justify-between items-center h-14 px-3">
        <h1 className=" font-bold text-lg">SteinsLibrary</h1>
        <ul className="flex space-x-4">
          {urls.map((url) => (
            <li key={url.title} className="list-none">
              {url.title == "Categories" ? (
                <button onClick={toggleCategories}>{url.title}</button>
              ) : (
                <Link href={url.target}>{url.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {showCategories && (
        <div className=" bg-white/[0.3] backdrop-blur-sm w-full h-screen left-0 absolute">
          <div className="flex flex-col m-auto w-[800px] h-[450px] bg-white border-2 border-black rounded-lg">
            {CategoriesModal.map((item) => (
              <div key={item.title} className="m-4">
                <h1 className=" text-center">{item.title}</h1>
                {item.list.map((itemList, i) => (
                  <p key={i} className="inline-block m-2 p-2 bg-zinc-800 text-white rounded-3xl">
                    {itemList}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
