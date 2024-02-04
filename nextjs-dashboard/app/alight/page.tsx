import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { roboto } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="justify-center flex h-30 shrink-0 items-end rounded-lg bg-gradient-to-r from-purple-600 to-orange-600 p-4 md:h-30">
        <p className={`${roboto.className} text-xl text-white md:text-5xl md:leading-normal`}>Alight</p>
      </div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* <div className="flex flex-col items-center md:flex-row md:items-start"> Use flexbox */}
          {/* Image Component */}
          <Image
            src="/alightPic.jpg"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />


          {/* </div> */}

        </div>
        <div className={'"justify-right" ${roboto.className} md:px-0 md:py-12'}>
          <h1 className="text-xl">Safe as a stone in a peach</h1>
          <h2 className="text-xl">Jane Doe</h2>
          <p className="text-s">felt so safe. not a lot of foot traffic so we don't get many strangers. Multiple locked doors to get to apartment door and rarely hear noises on the street even on weekends</p></div>
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
