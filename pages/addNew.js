import React from 'react'
import Layout from "../components/layout"
import Head from "next/head"
import { useState, useEffect } from 'react'



export default function addNew() {
  const [studInfo, setstudInfo] = useState({name:" ", num: 0})

  async function getStudentData(){
    const res = await fetch("http://localhost:8000/students")
    const data = await res.json()
  
    return {stud:data}
  }
  const student = getStudentData()
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
   

  async function newData(){
   let item = { 
    id: parseInt(Date.now()),
    name: studInfo.name, 
    number: studInfo.num}
    const index = student.find(takenVal=>takenVal.number == item.number)
    if (index){
      throw new Error("Student number exists")
    }
    else{
      const res = await fetch("http://localhost:8000/students", {
        method: "POST",
        headers: {'Content-Type':"application/json"},
        body: JSON.stringify(item)
      })
      const data = await res.json()
     
      window.alert("New data" + data) 
    } 
    
    
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
        <div action ="/" method = "POST" className=' flex flex-col'>
       
           <section className='flex flex-row my-2'>
           <label  className='font-semibold py-2 px-3 w-30 md:w-60'>Please enter name: </label>
            <input type = "text"
                name = "name"
                id = "student_name"
                value= {studInfo.name}
                onChange = {setName}
                className=' appearance-none focus:drop-shadow-xl border-2 border-slate-300 rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-30 md:w-40'
            />
            </section>
            <section  className='flex flex-row my-2'>
             <label  className='font-semibold py-2 px-3 md:w-60 '>Please enter number: </label>
             <input type ="number"
                name = "number"
                id = "student_num"
                value={studInfo.num}
                onChange = {setNum}
                className=' appearance-none focus:drop-shadow-xl border-2 border-slate-300 rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-30 md:w-40'
            />
            </section>
            <section className='flex flex-row px-3 py-2'>
                <button  onClick= {newData} value="submit" className='mr-2 py-2 px-3 drop-shadow-md border border-solid border-slate-400 rounded w-30  bg-none  hover:bg-red-500'>Submit</button>
               
            <button type="reset" onClick = {clear} value="clear" className='mr-2 py-2 px-3 drop-shadow-md border border-solid border-slate-400 rounded w-30  bg-none  hover:bg-green-500' >Clear</button>
            </section>
        </div>
    </Layout>
  )
}
