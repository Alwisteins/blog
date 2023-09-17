import { Library } from "@/components/Home/Library";
import Write from "@/components/Home/Write";

export default function Home() {
  return (
    <main>
      <article>
        <h1 className=" font-normal text-7xl">
          <span className="font-bold">Hello, Guest!</span> welcome to
          <span className="font-bold"> SteinsLibrary</span> the home of
          knowledge
        </h1>
        <p className=" text-xl">
          a place where you can express your knowledge in an article or book.
          the perfect place to fill your mind from other people's thoughts
          through their writing by reading
        </p>
      </article>
      <article className=" px-10 py-10 flex">
        <Library />
        <article className="ml-8 mt-2 space-y-4">
          <h1 className="font-bold text-xl">
            why do we need to read and write?
          </h1>
          <blockquote className="space-y-4">
            <q className="italic">
              Knowledge is the key to a true understanding of the world and
              ourselves. Without knowledge, we will be lost in darkness.
            </q>
            <p>-Ibnu Rushd (Averroes)</p>
          </blockquote>
        </article>
      </article>
      <article>
        <Write />
      </article>
    </main>
  );
}
