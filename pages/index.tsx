import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { createClient } from "next-sanity";
import { useEffect, useState } from 'react';

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

function getPreferredColorScheme() {
  if (typeof window !== 'undefined') {
  if (window.matchMedia) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      return 'dark';
    } else {
      return 'light';
    }
  }
  }
  return 'light';
}

const Home: NextPage = () => {

  const [posts, setPosts] = useState<any[]>([]);

  const darkMode = getPreferredColorScheme() === 'dark';

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className='bg-white dark:bg-raisin-black'>
      <Head>
        <title>Isaiah Taylor</title>
        <meta name="description" content="Isaiah Taylor's writings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex'>
        <div className='flex flex-col justify-between grow p-[100px]'>
          <div className='flex flex-col gap-5'>
            {posts.map((post) => (
              <div className='text-eerie-black dark:text-platinum font-display font-bold ' key={post._id}>
                <h1 className='text-4xl'>{post.title}</h1>
                {/* <p>{post.body}</p> */}
              </div>
            ))}
          </div>

          <div className='flex flex-col text-eerie-black dark:text-platinum font-display font-bold text-xl'>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
          </div>
        </div>
        <div className='flex justify-center items-center align-middle w-[600px] h-screen'>
          <Image
            src={darkMode ? "/IT-dark.svg" : "/IT.svg"}
            alt="Isaiah Taylor"
            width={350}
            height={350}
          />
        </div>
      </main>
    </div>
  )
}

export default Home
