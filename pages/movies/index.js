import Link from "next/link";
import { movies } from "../../lib/data.js";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Movies() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>List of Movies</title>
      </Head>
      <h1>List of Movies</h1>
      <ul>
        {movies.map(({ slug, title, id }) => (
          <li key={id}>
            <Link href={`/movies/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => {
          if (confirm("Are you Aquaman?")) {
            console.log("navigate to the aquaman page!");
            router.push("movies/aquaman");
          }
        }}
      >
        Are you Aquaman
      </button>
    </>
  );
}
