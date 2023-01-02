import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import { ThemeContext } from "../contexts/themeContext";

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
    <ThemeContext.Consumer>
      {({ colorMode }) => (
        <div className="bg-white dark:bg-raisin-black text-eerie-black dark:text-platinum">
          <Head>
            <title>Isaiah Taylor</title>
            <meta name="description" content="Isaiah Taylor's writings" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className="w-full flex flex-col justify-center align-middle items-center lg:flex-row lg:w-auto">
            <div className="flex flex-col justify-center items-center w-full lg:hidden pt-6">
              <div
                className="flex gap-1 font-display font-bold text-2xl text-center"
                style={{
                  fontVariant: "small-caps",
                  fontFamily: "Playfair Display SC",
                }}
              >
                <MyLink href={"/"} text={"Home"} />
                &middot;
                <MyLink href={"/highlights"} text={"Highlights"} />
                &middot;
                <MyLink href={"/about"} text={"About"} />
              </div>
              <Image
                src={colorMode === "dark" ? "/IT-dark.svg" : "/IT.svg"}
                alt="Isaiah Taylor"
                width={200}
                height={200}
                className="cursor-pointer"
              />
              <div className="flex gap-1 pt-1 font-display font-bold text-xl text-right">
                <a
                  href="https://twitter.com/isaiah_p_taylor"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <p>Twitter</p>
                </a>
                &middot;
                <a
                  href="https://www.instagram.com/isaiah.p.taylor/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <p>Instagram</p>
                </a>
                &middot;
                <a
                  href="https://www.linkedin.com/in/isaiahptaylor/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <p>LinkedIn</p>
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between grow p-10 lg:p-[100px] lg:pr-[600px]">
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
                            parseISO(post._createdAt),
                            "EEEE, MMMM do, yyyy"
                          )}
                        </h2>
                      </div>
                    </Link>
                    {/* <p>{post.body}</p> */}
                  </div>
                ))}
              </div>

              <p className="pt-[200px] font-display font-bold text-lg text-granite-gray dark:text-grayish">
                {"That's all for now."}
              </p>

              {/* <div className="flex flex-col font-display font-bold text-xl">
                <p>Twitter</p>
                <p>Instagram</p>
                <p>LinkedIn</p>
              </div> */}
            </div>
            <div className="invisible lg:visible">
              <RightSide />
            </div>
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
