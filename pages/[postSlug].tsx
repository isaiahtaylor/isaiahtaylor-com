import type { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ThemeContext } from '../contexts/themeContext'

import { createClient } from "next-sanity";
import { useContext, useEffect, useState } from 'react';

const client = createClient({
  projectId: "tyc9omzx",
  dataset: "production",
  apiVersion: "2022-10-23",
  useCdn: false,
});

const PostPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({post}) => {

  return (
    <ThemeContext.Consumer>
      {({colorMode, toggleTheme}) => (
      <div className='bg-white dark:bg-raisin-black text-eerie-black dark:text-platinum'>
        <Head>
          <title>Isaiah Taylor</title>
          <meta name="description" content="Isaiah Taylor's writings" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className='flex'>
          <div className='flex flex-col justify-between grow p-[100px]'>
            <div className='flex flex-col gap-5'>
              {post.title}
            </div>

            <div className='flex flex-col font-display font-bold text-xl'>
              <p>Twitter</p>
              <p>Instagram</p>
              <p>LinkedIn</p>
            </div>
          </div>
          <div className='flex justify-center items-center align-middle w-[600px] h-screen'>
            <Image
              src={colorMode === 'dark' ? "/IT-dark.svg" : "/IT.svg"}
              alt="Isaiah Taylor"
              width={350}
              height={350}
            />
          </div>
        </main>
      </div>
      )}
    </ThemeContext.Consumer>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  const post = (await client.fetch(query, { slug: context.params?.postSlug ?? '' })) as any;
  console.log(context)
  console.log(post)
  return {
    props: {
      post,
    },
  };
}

export default PostPage
