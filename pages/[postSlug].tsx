import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Image from "next/image";
import { ThemeContext } from "../contexts/themeContext";
import { PortableText } from "@portabletext/react";

import { createClient } from "next-sanity";
import { SocialShare } from "../components/socialShare";

import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "tyc9omzx",
  dataset: "production",
  apiVersion: "2022-10-23",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

const PostPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ post }) => {
  return (
    <ThemeContext.Consumer>
      {({ colorMode }) => (
        <div className="bg-white dark:bg-raisin-black text-eerie-black dark:text-platinum">
          {/* <Head>
            <title>{post.title} | Isaiah Taylor</title>
            <meta name="description" content="Isaiah Taylor's writings" />
            <link rel="icon" href="/favicon.ico" />
          </Head> */}

          <main className="flex w-full justify-between">
            <div className="flex flex-col w-[1000px] pl-[100px] pt-[100px]">
              <div className="flex flex-col gap-1">
                <div className="font-display font-bold text-granite-gray dark:text-spanish-gray text-[20px]">
                  ISAIAH TAYLOR
                </div>
                <div className="flex flex-col gap-5 font-display text-[40px] font-bold">
                  {post.title}
                </div>
                <div>
                  <SocialShare></SocialShare>
                </div>
              </div>

              <div className="py-10">
                <div className="relative flex h-[500px]">
                  <Image
                    src={builder.image(post.mainImage).url()}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>

              <div className="mt-6 font-body text-[20px]">
                <PortableText value={post.body} />
              </div>
            </div>
            <div className="flex font-display justify-center items-center align-middle w-[600px] h-screen fixed top-0 right-0">
              <div className="flex flex-col justify-between h-screen py-[100px]">
                <div
                  className="flex flex-col font-display font-bold text-2xl text-right"
                  style={{
                    fontVariant: "small-caps",
                    fontFamily: "Playfair Display SC",
                  }}
                >
                  <p>Home</p>
                  <p>Highlights</p>
                  <p>About</p>
                </div>
                <Image
                  src={colorMode === "dark" ? "/IT-dark.svg" : "/IT.svg"}
                  alt="Isaiah Taylor"
                  width={300}
                  height={300}
                />
                <div className="flex flex-col font-display font-bold text-xl text-right">
                  <p>Twitter</p>
                  <p>Instagram</p>
                  <p>LinkedIn</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  const post = (await client.fetch(query, {
    slug: context.params?.postSlug ?? "",
  })) as any;

  return {
    props: {
      post,
    },
  };
}

export default PostPage;
