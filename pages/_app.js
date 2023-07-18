import '@/styles/globals.css'
<<<<<<< HEAD
import { Poppins } from 'next/font/google'

const poppins = Poppins ({
  weight: ['300'],
subsets: ['latin']
})
export default function App({ Component, pageProps }) {
  return (
    <main className= {poppins.className}>
    <Component {...pageProps} className='bg-slate-300 h-full'/>
    </main>
  )
 
=======

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
>>>>>>> a94b7533ebf6d76e902996129af00b63a887c4d9
}
