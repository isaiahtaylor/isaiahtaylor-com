import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { createClient } from "next-sanity";
import { SocialShare } from "../components/socialShare";

import imageUrlBuilder from "@sanity/image-url";
import { RightSide } from "../components/rightSide";
import { Post } from "../schema";
import Head from "next/head";
import Link from "next/link";

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
  const mainImage = builder.image(post.mainImage!);
  const socialImage = mainImage.width(600);
  return (
    <div className="bg-white dark:bg-raisin-black text-eerie-black dark:text-platinum">
      <Head>
        <title>{`${post.title} | Isaiah Taylor`}</title>
        <meta property="og:title" content={`${post.title} | Isaiah Taylor`} />
        <meta property="og:image" content={socialImage.url()} />
        <meta property="og:description" content={post.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@isaiah_taylor" />
        <meta name="twitter:creator" content="@isaiah_taylor" />
        <meta name="twitter:title" content={`${post.title} | Isaiah Taylor`} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={socialImage.url()} />
        <meta name="twitter:image:alt" content={post.title} />
      </Head>

      <main className="flex flex-col lg:flex-row w-full justify-between">
        <RightSide />
        <div className="flex flex-col lg:pr-[600px] p-8 lg:p-[100px] w-full items-center">
          <div className="lg:max-w-[800px]">
            <div className="flex flex-col gap-1">
              <Link href="/">
                <div
                  className="font-display font-bold text-granite-gray dark:text-spanish-gray text-2xl"
                  style={{
                    fontVariant: "small-caps",
                  }}
                >
                  Isaiah Taylor
                </div>
              </Link>
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
                  src={mainImage.url()}
                  style={{ height: "auto", width: "100%" }}
                  width={1000}
                  height={1000}
                  alt="image"
                />
              </div>
            </div>

            <div dangerouslySetInnerHTML={
              { __html: post.embed ?? '' }
            } />

            <div className="mt-6 font-body text-[20px]">
              <PortableText
                value={post.body!}
                components={{
                  block: {
                    h1: ({ children }) => (
                      <h1 className="font-display text-4xl font-bold mt-8 mb-3">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="font-display text-3xl font-bold mt-7 mb-3">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="font-display text-2xl font-bold mt-6 mb-3">
                        {children}
                      </h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className="font-display text-xl font-bold mt-5 mb-3">
                        {children}
                      </h4>
                    ),
                    h5: ({ children }) => (
                      <h5 className="font-display text-lg font-bold mt-4 mb-3">
                        {children}
                      </h5>
                    ),
                    h6: ({ children }) => (
                      <h6 className="font-display text-base font-bold mt-3 mb-3">
                        {children}
                      </h6>
                    ),
                    // quote (a line of text with a left border)
                    blockquote: ({ children }) => (
                      <div className="border-l-4 border-granite-gray dark:border-platinum pl-4">
                        {children}
                      </div>
                    ),
                    normal: ({ children }) => (
                      <p className="my-3">{children}</p>
                    ),
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="list-disc list-inside">{children}</ul>
                    ),
                    number: ({ children }) => (
                      <ol className="list-decimal list-inside">{children}</ol>
                    ),
                  },
                  listItem: {
                    bullet: ({ children }) => <li>{children}</li>,
                    number: ({ children }) => <li>{children}</li>,
                  },
                  marks: {
                    link: ({ children, value }) => (
                      <a
                        href={value.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        {children}
                      </a>
                    ),
                    code: ({ children }) => (
                      <code className="bg-gray-100 dark:bg-granite-gray p-1 rounded text-sm font-mono">
                        {children}
                      </code>
                    ),
                  },
                  types: {
                    image: ({ value }) => {
                      const image = builder.image(value.asset);
                      return (
                        <div className="relative w-full">
                          <Image
                            src={image.url()}
                            style={{ height: "auto", width: "100%" }}
                            width={1000}
                            height={1000}
                            alt="image"
                          />
                        </div>
                      );
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
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
