import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout, {siteTitle} from "../components/layout"
const inter = Inter({ subsets: ['latin'] })
import Head from "next/head"
export default function Home() {
  
  return (
    <Layout>
    
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <div >
        <h1 className = "text-red-800">Helloooo</h1>
        
      </div>
     
    </Layout>
  )
  
}
