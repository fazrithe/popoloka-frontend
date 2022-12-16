import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='text-3xl text-green-600 p-2'>
      <Link href="/">
          Home
      </Link>
      <Link href="about">
        About
      </Link>
    </div>
  )
}
