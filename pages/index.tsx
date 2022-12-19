import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from './components/navbar'
import Slider from './components/slider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='z-10'>
      <Navbar></Navbar>
    </div>
    <div className='container mx-auto px-4 static'>
      <div className='box-content h-100 w-100 p-4'>
        <Slider></Slider>
      </div>
      <div className='box-content h-100 w-100'>
          <div className='flex'>
          <div className='flex-1 flex justify-center'>
            <div className='shadow-md'>
              <img 
                  className="object-cover h-28 w-66"
                  src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                  alt="image slide 1"
                />
                <div className='flex justify-center'>  
                  <p className=''>Category 1</p>
                </div>
            </div>
          </div>
          <div className='flex-1 flex justify-center'>
            <div className='shadow-md'>
              <img 
                  className="object-cover h-28 w-66"
                  src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                  alt="image slide 1"
                />
                 <div className='flex justify-center'>  
                  <p className=''>Category 1</p>
                </div>
            </div>
          </div>
          <div className='flex-1 flex justify-center'>
            <div className='shadow-md'>
              <img 
                  className="object-cover h-28 w-66"
                  src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                  alt="image slide 1"
                />
                 <div className='flex justify-center'>  
                  <p className=''>Category 1</p>
                </div>
            </div>
          </div>
          <div className='flex-1 flex justify-center'>
            <div className='shadow-md'>
              <img 
                  className="object-cover h-28 w-66"
                  src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                  alt="image slide 1"
                />
                <div className='flex justify-center'>  
                  <p className=''>Category 1</p>
                </div>
            </div>
          </div>
          <div className='flex-1 flex justify-center'>
            <div className='shadow-md'>
              <img 
                  className="object-cover h-28 w-66"
                  src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                  alt="image slide 1"
                />
                 <div className='flex justify-center'>  
                  <p className=''>Category 1</p>
                </div>
            </div>
          </div>
          <div className='flex-1 flex justify-center'>
            <div className='shadow-md'>
              <img 
                  className="object-cover h-28 w-66"
                  src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                  alt="image slide 1"
                />
                 <div className='flex justify-center'>  
                  <p className=''>Category 1</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
