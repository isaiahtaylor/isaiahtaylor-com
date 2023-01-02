import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ThemeContext } from "../contexts/themeContext";

import { createClient } from "next-sanity";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";

import { parseISO, format } from "date-fns";
import { RightSide } from "../components/rightSide";

const client = createClient({
  projectId: "tyc9omzx",
  dataset: "production",
  apiVersion: "2022-10-23",
  useCdn: false,
});

async function getPosts() {
  const query = `*[_type == "post"]`;
  const posts = await client.fetch(query);
  return posts;
}

const Home: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ posts }) => {
  console.log(posts);
  return (
    <ThemeContext.Consumer>
      {({ colorMode, toggleTheme }) => (
        <div className="bg-white dark:bg-raisin-black text-eerie-black dark:text-platinum">
          <Head>
            <title>Isaiah Taylor</title>
            <meta name="description" content="Isaiah Taylor's writings" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className="flex">
            <div className="flex flex-col justify-between grow p-[100px]">
              <div className="flex flex-col gap-5">
                {posts.map((post) => (
                  <div
                    className="font-display font-bold cursor-pointer"
                    key={post._id}
                  >
                    <Link href={`/${post.slug.current}`}>
                      <div>
                        <h1 className="text-4xl">{post.title}</h1>
                        <h2 className="text-granite-gray text-xl dark:text-grayish">
                          {format(
                            parseISO(post._updatedAt),
                            "EEEE, MMMM do, yyyy"
                          )}
                        </h2>
                      </div>
                    </Link>
                    {/* <p>{post.body}</p> */}
                  </div>
                ))}
              </div>

              {/* <div className="flex flex-col font-display font-bold text-xl">
                <p>Twitter</p>
                <p>Instagram</p>
                <p>LinkedIn</p>
              </div> */}
            </div>
            <RightSide />
            {/* <div className="flex justify-center items-center align-middle w-[600px] h-screen">
              <Image
                src={colorMode === "dark" ? "/IT-dark.svg" : "/IT.svg"}
                alt="Isaiah Taylor"
                width={350}
                height={350}
              />
            </div> */}
          </main>
        </div>
      )}
    </ThemeContext.Consumer>
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
