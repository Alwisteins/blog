import Link from "next/link";

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

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center h-10 px-3">
      <h1 className=" font-bold text-lg">SteinsLibrary</h1>
      <ul className="flex space-x-4">
        {urls.map((url) => (
          <li key={url.title} className="list-none">
            <Link href={url.target}>{url.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
