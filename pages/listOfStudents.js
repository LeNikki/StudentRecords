import React from 'react'
import Layout from "../components/layout"
import Link from "next/link"
import Head from "next/head"
import { useState } from 'react'


export let prevInfo ={}
export default function ListOfStudents({studentProp}) {
    //studentProp from getStaticProps loads intial data
    const [student, setstudent] = useState(studentProp)
    //Get API req, loads new data when edited or deletd
    async function GetData(){
        const res = await fetch("http://localhost:8000/students")
        const data = await res.json()
        setstudent(data)
        console.log("getting...")
    }
    async function DeleteData(studentId){
        const res = await fetch(`http://localhost:8000/students/${studentId}`,{
            method: "DELETE"
        })
        const data = res.json()
        
        window.alert("Deleted")
        GetData()
    }

    function getStud(stud){
        console.log("update")
        prevInfo = stud
    }
   
   

  return (
    <Layout>
        
        <Head><title>List of students</title></Head>
    <div className='flex justify-center items-center flex-col bg-slate-300 mr-5 '>
        { 
            student.map(stud=>(
                <section className=' grid grid-cols-4  bg-cyan-300 w-70  md:w-3/4' key= {stud.id}>
                <p className='bg-red-100 p-1 md:p-3  col-span-2'>{stud.name}</p>
                <p className='bg-yellow-100 p-1 md:p-3 col-span-1'>{stud.number}</p>
                <section className='flex flex-row  md:ml-2 md:col-span-1'>
                { /*studentInfo is an object that holds id, name and num, you should destructure it when passing*/}
                    <button className='bg-yellow-400 ml-0 p-1 md:p-3 md:w-40  ml-2' onClick={()=>getStud(stud)}> <Link href="./updateData">Edit</Link></button>
                    <button className='bg-red-400  p-1 md:p-3 ml-0 md:w-40  ml-2 hover:bg-green-600' onClick = {()=>DeleteData(stud.id)}>Delete</button>
                </section>                
            </section> )
            )
        }
            
       
        
 
    </div>

   
    </Layout>
  )
}

//get server side props to be able to load data at runtime, useful if there are changes in dataset
export async function getServerSideProps(){
    const res = await fetch("http://localhost:8000/students")
    const data = await res.json()

    return{
        props:{
            studentProp: data
        }
    }
}