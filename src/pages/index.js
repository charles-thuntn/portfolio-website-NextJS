import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.jpg'
import Link from 'next/link'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import Layout from '@/common/components/Layout'
import AnimatedText from '@/common/components/AnimatedText'
import AnimatedTransitionPage from '@/common/components/AnimatedTransitionPage'
import HireMe from '@/modules/home/HireMe'
import { LinkArrow } from '@/common/components/Icons'
import { email, name_resume } from '@/common/utils/constants'

export default function Home() {
  return (
    <>
      <Head>
        <title>Thu Nguyen | Home</title>
        <meta name="description" content="Thu Nguyen | Home" />
      </Head>
      <AnimatedTransitionPage />
      <main className='flex items-center text-dark dark:text-light w-full min-h-screen'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image
                src={profilePic}
                alt='picture-representation'
                className='w-auto h-full max-h-screen p-2 lg:hidden md:inline-block md:w-full md:h-auto md:pr-0 md:pb-4'
                priority
                sizes="
                  (max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  50vw
                "
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text={"Turning Vision Into Reality With Code And Design."} className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a skilled Frontend developer, I am dedicated to turning ideas into innovative web applications.
                showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/Resume-Thu-Nguyen.pdf" target={"_blank"}
                  className='
                    flex items-center 
                    bg-dark dark:bg-light 
                    text-light dark:text-dark 
                    p-2.5 px-6 text-lg font-semibold
                    rounded-lg border-2 border-solid border-transparent
                    hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light hover:border-dark hover:dark:border-light
                    md:p-2 md:px-4 md:text-base
                  '
                >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link href={`mailto:${email}`} target={"_blank"}
                  className='ml-4 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt='ThuNguyen' className='w-full h-auto'></Image>
        </div>
      </main>
    </>
  )
}
