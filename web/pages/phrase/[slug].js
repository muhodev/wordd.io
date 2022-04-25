import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { getOnePhrase } from "services/phrases";
import { array } from "@utils";

export default function PhraseDetail(props) {
  const router = useRouter();
  const slug = router?.query?.slug;
  const { data } = useQuery(["phrases", slug], () => getOnePhrase(slug));
  const phrase = data?.doc;
  return (
    <div className="antialiased text-zinc-500 dark:text-zinc-400 bg-white dark:bg-zinc-900">
      <Head>
        <title>wordd.io</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="border-b dark:border-zinc-800 h-16 flex items-center justify-center sticky top-0 bg-white dark:bg-zinc-900">
        <div className="container mx-auto ">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            <Link href="/">
              <a>wordd.io</a>
            </Link>
          </h1>
        </div>
      </header>
      <div className="" style={{ minHeight: "calc(100vh - 4rem)" }}>
        <div className="container mx-auto ">
          <div className="py-4 ">
            <h2 className="text-3xl font-bold dark:text-zinc-50 py-8 text-left">
              {phrase?.sentence?.en}
            </h2>
            <div className="py-4 px-4 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg dark:highlight-white/5">
              <h2 className="font-bold dark:text-zinc-50 text-xl pb-4">
                Çeviri:
              </h2>
              <h3 className="font-medium">
                <span className="text-indigo-500 dark:text-indigo-400">EN</span>{" "}
                - {phrase?.sentence?.en}
              </h3>
              <div className=" py-2">
                <span className="text-indigo-500 dark:text-indigo-400">TR</span>{" "}
                - {phrase?.sentence?.tr}
              </div>
              <h2 className="font-bold dark:text-zinc-50 text-xl mt-8 pb-4">
                Tanım:
              </h2>
              <p>{phrase?.definition}</p>

              <h2 className="font-bold dark:text-zinc-50 text-xl mt-8 pb-4">
                Kelimeler:
              </h2>
              <div className="text-sm space-x-2">
                {phrase?.words?.map((word) => (
                  <Link href="/" key={word}>
                    <a className="font-semibold text-indigo-500 text-sm dark:text-indigo-300 border border-indigo-400 px-4 py-1 leading-none rounded-lg">
                      {word}
                    </a>
                  </Link>
                ))}
              </div>

              <h2 className="font-bold dark:text-zinc-50 text-xl mt-8 pb-4">
                Etiketler:
              </h2>
              <div className="text-sm space-x-2">
                {array(phrase?.tag)?.map((tag) => (
                  <Link href="/" key={tag}>
                    <a className="font-semibold text-indigo-500 dark:text-indigo-400  ">
                      #{tag}
                    </a>
                  </Link>
                ))}
              </div>
              <time className="text-sm opacity-50 pt-4 block">
                {new Date(phrase?.createdAt).toLocaleDateString()}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const queryClient = new QueryClient();
  const slug = params.slug;

  await queryClient.prefetchQuery(["phrases", slug], () => getOnePhrase(slug));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
