import type { NextPage } from 'next'

import { prisma } from '../../server/db/client'
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { roboto } from '@/app/ui/fonts';
import Image from 'next/image';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'


type PostProps = {
  id: number;
  title: string;
  location: string;
}

type Props = {
  posts: PostProps[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (

    <div>
      <main className="flex min-h-screen flex-col p-6">
        <div className="justify-center flex h-30 shrink-0 items-end rounded-lg bg-gradient-to-r from-purple-600 to-orange-600 p-4 md:h-30">
          <p className={`${roboto.className} text-xl text-white md:text-5xl md:leading-normal`}>The Hub</p>
        </div>
        <h1>Home</h1>
        {posts && Array.isArray(posts) && posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.location}</p>
            <p>test</p>
          </div>
        ))}
      </main>

    </div>
  )
}
export default Home

export async function GetServerSideProps() {
  const posts = await prisma.apartment.findMany()

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    }
  }
}