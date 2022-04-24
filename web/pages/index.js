import Head from "next/head";
import Link from "next/link";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { getAllPhrases } from "services/phrases";

export default function Home(props) {
  const { data } = useQuery("phrases", getAllPhrases);
  const phrases = Array.isArray(data?.phrases) ? data.phrases : [];
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
          <div className="mx-auto text-center max-w-5xl py-20">
            <h2 className="text-zinc-900 dark:text-zinc-200 text-5xl font-bold ">
              İngilizce ifadeleri keşfedin!
            </h2>
            <p className="pt-8">
              İngilizce ifadelerin Türkçe karşıklıklarını öğrenin. İngilizce
              cümle kurmakta zorlanıyorsanız veya kurduğunuz cümlenin doğru olup
              olmadığından emin değilseniz,{" "}
              <Link href="/">
                <a className="font-semibold text-indigo-500 dark:text-indigo-400">
                  wordd.io
                </a>
              </Link>{" "}
              üzerinden arama yaparak benzer cümleleri bulabilirsiniz.
            </p>
          </div>

          <div className="col"></div>
          <div className="space-y-4 py-4">
            {phrases?.map((phrase) => (
              <div className="py-4 px-4 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg dark:highlight-white/5">
                <div className="font-bold text-lg">
                  <Link href={`/phrase/${phrase?.slug}`}>
                    <a className="hover:underline">{phrase?.sentence?.en}</a>
                  </Link>
                </div>
                <div className="dark:text-zinc-400 pt-3">
                  {phrase?.sentence?.tr}
                </div>
                <div className="text-sm pt-6 space-x-2">
                  {phrase?.tag?.map((tag) => (
                    <Link href="/">
                      <a className="font-semibold text-indigo-500 dark:text-indigo-400">
                        #{tag}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("phrases", getAllPhrases);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
