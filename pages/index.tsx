import Head from 'next/head'
import Image from 'next/image'
import logo from 'public/assets/logo/logo.png'

export default function Home() {
  return (
    <div className='container mx-auto'>
    <div className='relative bg-white'>
      <div className='mx-auto max-w-7x1 px-4 sm:px-6'>
        <div className='flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Image src={logo} className='h-8 w-auto sm:h-10'></Image>
            {/* <img className='h-8 w-auto sm:h-10' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' alt=''></img> */}
          </div>  
        <div className='-my-2 -mr-2 md:hidden'>
          <button type="button" className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500' aria-expanded="false">
            <span className='sr-only'>Open menu</span>
            <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
          <nav className='hidden space-x-10 md:flex'>
            <div className='relative'>
              <div className='columns-3'>
                <a href="#" className='w-full box-border h-32 w-32 p-4 text-base font-medium text-gray-500 hover:text-gray-900'>Pricing</a>
                <a href="#" className='w-full text-base font-medium text-gray-500 hover:text-gray-900'>Docs</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    </div>
  )
}
