import React from 'react'
import Head from "next/head"
import Link from "next/link"
export const siteTitle = "Student Information"
export default function layout({children}) {
    const navigations = [
        {id: 1, nav: "Home", directory: "/"},
<<<<<<< HEAD
        {id: 2, nav: "Students", directory:"/ListOfStudents"},
        {id: 3, nav: "Add New", directory:"/AddNew"}
=======
        {id: 2, nav: "Students", directory:"/listOfStudents"},
        {id: 3, nav: "Add New", directory:"/addNew"}
>>>>>>> a94b7533ebf6d76e902996129af00b63a887c4d9

    ]
    return (
        <div>
             {/* //-------HEAD-------- */}
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="This is a student information database."
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            
            {/* //-------Navigation Bar--------- */}
<<<<<<< HEAD
            <div className='flex flex-col  p-5 w-full   md:flex-row'>
                <h1 className='ml-5 flex items-center font-semibold mr-0 md: mr-10 text-lg'>Student Information Database</h1>
              <ul className='flex flex-col  ml-30  md:flex-row  justify-between'>
                {
                    navigations.map(item=>(
                        <Link href={item.directory} key={item.id}><li className='p-2 text-primary hover:bg-red-300 hover:text-white hover: rounded-md md: mr-3'>{item.nav}</li></Link>
=======
            <div className='flex flex-col  p-3 w-full bg-green-500  md:flex-row md:bg-pink-300'>
                <h1 className='ml-5 flex items-center font-semibold mr-0 md: mr-10'>Student Information Database</h1>
              <ul className='flex flex-col  ml-30 bg-yellow-300 md:flex-row '>
                {
                    navigations.map(item=>(
                        <Link href={item.directory} key={item.id}><li className='p-2 hover:bg-slate-200 md: mr-3'>{item.nav}</li></Link>
>>>>>>> a94b7533ebf6d76e902996129af00b63a887c4d9
                    ))
                }
                
               
              </ul>   
            </div>

            {/* Load the main component in pages/index */}
            <main className=' p-3 md:p-10'>{children}</main>
            
        </div>
    )
}
