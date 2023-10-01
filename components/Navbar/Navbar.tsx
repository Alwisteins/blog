"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FcFilledFilter } from "react-icons/fc";

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
  // handle popup categories
  const [showCategories, setShowCategories] = useState(false);
  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  // handle status checkbox
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const handleCheckboxChange = (itemList: string) => {
    //check if selected item is already on state or not
    checkedItems.includes(itemList)
      ? setCheckedItems(checkedItems.filter((item) => item !== itemList))
      : setCheckedItems([...checkedItems, itemList]);
  };

  //handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //show selected filtered items
    console.log("selected filter: ", checkedItems);

    // Reset checkbox and close Categories popup
    setCheckedItems([]);
    setShowCategories(false);
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
                <Link href={url.target}>{url.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {showCategories && (
        <div className="bg-white/30 backdrop-blur-sm w-full h-screen left-0 absolute">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col m-auto w-[800px] h-[450px] bg-white border-2 border-black rounded-lg"
          >
            {CategoriesModal.map((item) => (
              <div key={item.title} className="m-4">
                <h1 className="text-center text-lg font-medium">
                  {item.title}
                </h1>
                {item.list.map((itemList, i) => (
                  <div
                    key={i}
                    className={`m-2 p-2 inline-block text-white rounded-3xl ${
                      checkedItems.includes(itemList)
                        ? "bg-amber-600"
                        : "bg-zinc-800 hover:bg-amber-700"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="hidden"
                      id={itemList}
                      name={itemList}
                      onChange={() => handleCheckboxChange(itemList)}
                    />
                    <label htmlFor={itemList}>{itemList}</label>
                  </div>
                ))}
              </div>
            ))}
            <button
              type="submit"
              className=" text-sm flex items-center justify-center relative top-20 w-20 m-auto py-1 px-2 rounded-3xl border-2 bg-zinc-800 text-white hover:bg-amber-600 hover:border-amber-700"
            >
              <FcFilledFilter />
              Filter
            </button>
          </form>
        </div>
      )}
    </>
  );
}
