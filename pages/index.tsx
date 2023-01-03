import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";

import { createClient } from "next-sanity";
import Link from "next/link";

import { parseISO, format } from "date-fns";
import { RightSide } from "../components/rightSide";
import MyLink from "../components/myLink";

const client = createClient({
  projectId: "tyc9omzx",
  dataset: "production",
  apiVersion: "2022-10-23",
  useCdn: false,
});

async function getPosts() {
  const query = `*[_type == "post"] | order(_createdAt desc)`;
  const posts = await client.fetch(query);
  return posts;
}

const Home: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ posts }) => {
  return (
    <div className="bg-white dark:bg-raisin-black text-eerie-black dark:text-platinum">
      <Head>
        <title>Isaiah Taylor</title>
        <meta name="description" content="Isaiah Taylor's writings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex flex-col justify-center align-middle items-center lg:flex-row lg:w-auto">
        <RightSide />
        <div className="flex flex-col justify-between grow p-10 lg:p-[100px] lg:pr-[600px]">
          <div className="flex flex-col gap-7">
            {posts.map((post) => (
              <div
                className="font-display font-bold cursor-pointer"
                key={post._id}
              >
                <Link href={`/${post.slug.current}`}>
                  <div>
                    <h1 className="text-2xl underline lg:text-4xl">
                      {post.title}
                    </h1>
                    <h2 className="text-granite-gray text-xl dark:text-grayish">
                      {format(parseISO(post._createdAt), "EEEE, MMMM do, yyyy")}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <p className="pt-[200px] font-display font-bold text-lg text-granite-gray dark:text-grayish">
            {"That's all for now."}
          </p>
        </div>
        <div className="invisible lg:visible">
          <RightSide />
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const posts = (await getPosts()) as any[];
  return {
    props: {
      posts,
    },
  };
}

export default Home;
