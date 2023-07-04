import React from 'react'
import Layout from "../components/layout"
import Head from "next/head"
import { useState,  } from 'react'
//import clientPromise from '@/lib/mongodb'
import { Alumni_Sans_Collegiate_One } from 'next/font/google'

export default function AddNew({studentProp}) {
  const [studInfo, setstudInfo] = useState({name:" ", num: 0}); //inputs
  const [student, setstudent] = useState(studentProp); //studentList from server-json
 
  //loads new set of data
//   async function GetData(){
//     const res = await fetch("http://localhost:8000/students")
//     const data = await res.json()
//     setstudent(data)
// }
  function setName(e){
    setstudInfo(prev=>({
      ...prev,
      name: e.target.value,
    }))
  }
  function setNum(e){
    setstudInfo(prev=>({
      ...prev,
      num: e.target.value,
    }))
  }
   

  async function newData(e){
  //  //new student
  //  e.preventDefault()
  //  let item = { 
  //   id: parseInt(Date.now()),
  //   name: studInfo.name, 
  //   number: studInfo.num}
  // //check if student number exists
  // const index = student.find(takenVal=> takenVal.number == item.number);
  // const stdn = student.find(takenVal=> takenVal.name == item.name);
  // const ind = {index}
  // const stdName = {stdn}
  // console.log(stdName)
  //   if(ind.index!=null){
  //     if (ind.index.number === item.number){
  //       window.alert("ERROR: Student Number Exists") 
  //     }    
  //   }
  //   else if(stdName.stdn!=null){
  //    if (stdName.stdn.name === item.name){
  //       window.alert("ERROR: Student Name Exists") 
  //     }
  //   }
  //   else{
  //     const res = await fetch("http://localhost:8000/students", {
  //       method: "POST",
  //       headers: {'Content-Type':"application/json"},
  //       body: JSON.stringify(item)
  //     })
  //     const data = await res.json() 
  //      window.alert("Submitted Successfully") ;
  //      clear() //clear input box
  //   }
  //  GetData()
  }
    
    




  function clear(){
    const name = document.getElementById("student_name")
    const number = document.getElementById("student_num")

    name.value = " "
    number.value = 0;
  }

  return (
    <Layout>
        <Head><title>Add New</title></Head>
        <form action ="/addNew" method = "POST" className=' flex flex-col'>
        
           <fieldset className='flex flex-row my-2'>
           <label  className='font-semibold py-2 px-3 w-30 md:w-60'>Please enter name: </label>
            <input type = "text"
                name = "name"
                id = "student_name"
                value= {studInfo.name}
                onChange = {setName}
                className=' appearance-none focus:drop-shadow-xl border-2 border-slate-300 rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-30 md:w-40'
            />
            </fieldset>
            <fieldset  className='flex flex-row my-2'>
             <label  className='font-semibold py-2 px-3 md:w-60 ' >Please enter number: </label>
             <input type ="number"
                name = "number"
                id = "student_num"
                value={studInfo.num}
                onChange = {setNum}
                className=' appearance-none focus:drop-shadow-xl border-2 border-slate-300 rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-30 md:w-40'
                required
               min="10"
                maxLength="20"
            />
            </fieldset>
            <fieldset className='flex flex-row px-3 py-2'>
                <button  onClick= {newData} type ="submit" value="submit" className='mr-2 py-2 px-3 drop-shadow-md border border-solid border-slate-400 rounded w-30  bg-none  hover:bg-red-500'>Submit</button>
               
            <button type="reset" onClick = {clear} value="clear" className='mr-2 py-2 px-3 drop-shadow-md border border-solid border-slate-400 rounded w-30  bg-none  hover:bg-green-500' >Clear</button>
            </fieldset>

          
        </form>
    </Layout>
  )
  }

  //Server-json:
  // export async function getServerSideProps(){
  //   const res = await fetch("http://localhost:8000/students")
  //   const data = await res.json()
  //   return{
  //       props:{
  //           studentProp: data
  //       }
  //   }
  // }

//Mongo-db:
// export async function getServerSideProps(){
//   const client = await clientPromise;
//   const studentDb = await client.db("StudentsDb");
// }
