import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import {roboto} from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="justify-center flex h-30 shrink-0 items-end rounded-lg bg-gradient-to-r from-purple-600 to-orange-600 p-4 md:h-30">
      <p className={`${roboto.className} text-xl text-white md:text-5xl md:leading-normal`}>Foxridge</p>
      </div>
      <div className="flex flex-col items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* <div className="flex flex-col items-center md:flex-row md:items-start"> Use flexbox */}
            {/* Image Component */}
            <Image
              src="/edge.jpg"
              width={1000}
              height={760}
              className="hidden md:block"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            
            
          {/* </div> */}
        </div>
        <div className="flex flex-col items-baseline justify-center p-3 md:w-3/5 md:px-28 md:py-3">
          {/* Contact Information */}
          <p className={`${roboto.className} text-xl text-black md:text-xl md:leading-normal mt-4 md:mt-0 md:ml-4`}>
              Contact information: 666 777 8888
            </p>


        </div>
      
      
    </main>
  );
}
