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
import { RightSide } from "../components/rightSide";
import { Post } from "../schema";

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

          <main className="flex flex-col lg:flex-row w-full justify-between">
            <RightSide />
            <div className="flex flex-col lg:pr-[600px] p-8 lg:p-[100px]">
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

              <div className="py-10 w-full">
                <div className="relative w-full">
                  <Image
                    src={builder.image(post.mainImage!).url()}
                    style={{ height: "auto", width: "100%" }}
                    width={1000}
                    height={1000}
                    alt="image"
                  />
                </div>
              </div>

              <div className="mt-6 font-body text-[20px]">
                <PortableText value={post.body!} />
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
  })) as Post;

  return {
    props: {
      post,
    },
  };
}

export default PostPage;
