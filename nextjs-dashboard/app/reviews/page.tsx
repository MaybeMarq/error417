import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import {roboto} from '@/app/ui/fonts';
import {lusitana} from '@/app/ui/fonts';
//import {motion, AnimatePresence} from "framer-motion";

import Image from 'next/image';

export default function Page() {


    return (
        <main className="flex min-h-screen flex-col p-6">
          <div className="justify-center flex h-30 shrink-0 items-end rounded-lg bg-gradient-to-r from-purple-600 to-orange-600 p-4 md:h-30">
             <p className={`${lusitana.className} text-xl text-white md:text-5xl md:leading-normal`}>Reviews</p>
          </div>
          <div className="mt-4 flex gap-4 md:flex-row">
            <Link href= '/hub' className="flex flex-col items-center justify-center gap-6 rounded-lg bg-white py-10  md:w-full md:h-full hover:bg-purple-200 border-2 border-gray-500">
            
              <p className={`${roboto.className} text-center text-xl text-gray-800 md:text-3xl`}>
                <strong>The Hub</strong>
              </p>
              
            
            </Link>
            <Link href='edge' className="flex flex-col items-center justify-center gap-6 rounded-lg bg-white py-10 md:w-full md:h-full hover:bg-purple-200 border-2 border-gray-500">
            
              <p className={`${roboto.className} text-center text-xl text-gray-800 md:text-3xl`}>
                <strong>The Edge</strong>
              </p>
           
          </Link>

            </div>
            <div className="mt-4 flex gap-4 md:flex-row">
            <Link href='vue' className="flex flex-col items-center justify-center gap-6 rounded-lg bg-white py-10 md:w-full md:h-full hover:bg-purple-200 border-2 border-gray-500">
            
              <p className={`${roboto.className} text-center text-xl text-gray-800 md:text-3xl`}>
                <strong>The Vue</strong>
              </p>
              
            
            </Link>
            <Link href = 'foxridge' className="flex flex-col items-center justify-center gap-6 rounded-lg bg-white py-10 md:w-full md:h-full hover:bg-purple-200 border-2 border-gray-500">
            
              <p className={`${roboto.className} text-center text-xl text-gray-800 md:text-3xl`}>
                <strong>Foxridge</strong>
              </p>
           
          </Link>

            </div>
            
            <div className="mt-4 flex gap-4 md:flex-row">
            <Link href='alight' className="flex flex-col items-center justify-center gap-6 rounded-lg bg-white py-10 md:w-full md:h-full hover:bg-purple-200 border-2 border-gray-500">
            
              <p className={`${roboto.className} text-center text-xl text-gray-800 md:text-3xl`}>
                <strong>Alight</strong>
              </p>
              
            
            </Link>
            <Link href = 'summit' className="flex flex-col items-center justify-center gap-6 rounded-lg bg-white py-10 md:w-full md:h-full hover:bg-purple-200 border-2 border-gray-500">
            
              <p className={`${roboto.className} text-center text-xl text-gray-800 md:text-3xl`}>
                <strong>The Summit</strong>
              </p>
           
          </Link>

            </div>
            <div className="mt-4 flex gap-4 md:flex-row">
            <Link href='willow' className="flex flex-col items-center justify-center gap-6 rounded-lg bg-white py-10 md:w-full md:h-full hover:bg-purple-200 border-2 border-gray-500">
            
              <p className={`${roboto.className} text-center text-xl text-gray-800 md:text-3xl`}>
                <strong>Willow Creek</strong>
              </p>
              
            
            </Link>
            <Link href = 'terrace' className="flex flex-col items-center justify-center gap-6 rounded-lg bg-white py-10 md:w-full md:h-full hover:bg-purple-200 border-2 border-gray-500">
            
              <p className={`${roboto.className} text-center text-xl text-gray-800 md:text-3xl`}>
                <strong>Terrace View</strong>
              </p>
           
          </Link>

            </div>
            
        </main>
      );
  }