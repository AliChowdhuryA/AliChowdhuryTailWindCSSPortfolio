import Head from 'next/head'
import styles from '../styles/Home.module.css' 
import {BsFillMoonStarsFill} from 'react-icons/bs'
import{AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai';
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import {useState} from "react";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark": "bg-beige-100"}>
      <Head>
        <title>Ali portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-beige-100 px-10 md:px-20 lg:px-40 dark:bg-gray-500'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'> 
            <h1 className='text-xl' font-burtons>developed by Ali</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py -2 rounded-md ml-8"href="#">Resume</a></li>
              <li></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Ali Chowdhury</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer and designer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>Aspiring Software developer. Any and everyday</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src ={deved} layout='fill' objectFit='cover'/>
          
          </div>
        </section>
        <section >
          <div className='text-center bg-amber-300 dark:bg-slate-500 p-6 rounded-lg shadow-md'>
            <h3 className='text-3xl py-1 font-bold '>
              Services I offer
            </h3>
            <p className='text-md py-2 leading-8 text-gray-800 '>Since the beginning, I've always wanted to highlight 
            <span className="text-teal-500"> this text</span> and not this text
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>My main concerns are 
            <span className="text-teal-500"> this text</span> and not this text
            </p>
          </div>
          <div className='lg:flex gap-10'>
          <div className='text-center shadow-md p-6 rounded-xl my-10 bg-teal-500 dark:bg-gray-800 dark:shadow-lg'>
          <Image src={design} width={100} height={100} />
          <h3 className='text-lg font-medium pt-6 pb-2 text-white'>Beautiful Designs</h3>
          <p className='text-white'>Creating elegant designs for your needs</p>
          <h4 className='py-4 dark:text-teal-600 text-white'>Design tools I used</h4>
          <p className='text-white py-1'>Photoshop</p>
          <p className='text-white py-1'>Docker</p>
          <p className='text-white py-1'>Python</p>
          </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-beige-100 dark:bg-beige-100 '>
              <Image src={consulting} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p>Creating elegant designs for ur needs</p>
              <h4 className='py-4 text-teal-600'>Design tools I used</h4>
              <p className='text-gray-800 py-1 '>Photoship</p>
              <p className='text-gray-800 py-1'>Docker</p>
              <p className='text-gray-800 py-1'>Python</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-beige-100'>
              <Image src={code} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p>Creating elegant designs for ur needs</p>
              <h4 className='py-4 text-teal-600'>Design tools I used</h4>
              <p className='text-gray-800 py-1 '>Photoship</p>
              <p className='text-gray-800 py-1'>Docker</p>
              <p className='text-gray-800 py-1'>Python</p>
            </div>
          </div>
        </section>
        <section className='bg-beige-100 dark:bg-gray-500'>
          <div>
            <h3 className='text-3xl py-1'>
              portfolio
            </h3>
            <p className='text-md py-2 leading-8 text-gray-800'>Since the beginning, I've always wanted to highlight 
            <span className="text-teal-500"> this text</span> and not this text
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>My main concerns are 
            <span className="text-teal-500"> this text</span> and not this text
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
            <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
            <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
            <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
            <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
            <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
            <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
            </div>                                     
          </div>
        </section>
      </main>

    </div>
  )
}