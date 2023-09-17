import React from "react";
import Image from "next/image";

type Contents = { image: string; title: string; desc: string }[];

const contents: Contents = [
  { image: "/write-blog.jpg", title: "blog", desc: "start write a new blog" },
  { image: "/write-book.jpg", title: "book", desc: "start write a new book" },
];

export default function Write() {
  return (
    <>
      <h1 className="text-center text-3xl font-semibold">Wanna write one?</h1>
      <div className="flex items-center justify-evenly">
        {contents.map((content) => (
          <div className="w-96 h-72 flex flex-col items-center border-2">
            <Image
              key={content.title}
              src={content.image}
              alt={content.title}
              width={300}
              height={250}
            />
            <p>{content.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
