import React from 'react'
import Layout from "../components/layout"
import Head from "next/head"
import { useState } from 'react'

export default function form({props}) {
  const [studentName, setStudentName] = useState("")
  const [studentNum, setStudentNum] = useState(0)

  const newStud = { 
    id: parseInt(Date.now()),
    name: studentName, 
    number: studentNum}

  async function newData(){
    const res = await fetch("http://localhost:8000/students", {
      method: "POST",
      headers: {'Content-Type':"application/json"},
      body: JSON.stringify({ 
        //no need na id kay mo generate ra
        name: studentName, 
        number: studentNum})
    })
    const data = res.json()
    console.log("New data" + data)  
  }

  async function upData(){
    const res = await fetch("http://localhost:8000/students", {
      method: "PUT",
      headers: {'Content-Type':"application/json"},
      body: { 
        //no need na id kay mo generate ra
        name: studentName, 
        number: studentNum}}
     )
    const data = res.json()
    console.log("New data" + data)  
  }
  
  function updateData(props){
    const name = document.getElementById("student_name")
    const number = document.getElementById("student_num")
    name.value = props.updateData.name
    number.value =  props.updateData.number
  }
  
  function clear(){
    const name = document.getElementById("student_name")
    const number = document.getElementById("student_num")

    name.value = " "
    number.value = 0;
  }
  
  if(props.update==true){
    updateData(props)
  }

  return (
    <div>
        <div action ="/" method ={(props.update== true)? "PUT" : "POST"} className=' flex flex-col'>
       
           <section className='flex flex-row my-2'>
           <label  className='font-semibold py-2 px-3 w-30 md:w-60'>Please enter name: </label>
            <input type = "text"
                name = "name"
                id = "student_name"
                value={studentName}
                onChange = {(e)=>setStudentName(e.target.value)}
                className=' appearance-none focus:drop-shadow-xl border-2 border-slate-300 rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-30 md:w-40'
            />
            </section>
            <section  className='flex flex-row my-2'>
             <label  className='font-semibold py-2 px-3 md:w-60 '>Please enter number: </label>
             <input type ="number"
                name = "number"
                id = "student_num"
                value={studentNum}
                onChange = {(e)=>setStudentNum(e.target.value)}
                className=' appearance-none focus:drop-shadow-xl border-2 border-slate-300 rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-30 md:w-40'
            />
            </section>
            <section className='flex flex-row px-3 py-2'>
            {(props.update===true)?
                <button  onClick= {newData} value="submit" className='mr-2 py-2 px-3 drop-shadow-md border border-solid border-slate-400 rounded w-30  bg-none  hover:bg-red-500'>Submit</button>
                : <button onClick= {upData}  value="update" className='mr-2 py-2 px-3 drop-shadow-md border border-solid border-slate-400 rounded w-30  bg-none  hover:bg-red-500'>Update</button>
            }
            <button type="reset" onClick = {clear} value="clear" className='mr-2 py-2 px-3 drop-shadow-md border border-solid border-slate-400 rounded w-30  bg-none  hover:bg-green-500' >Clear</button>
            </section>
        </div>
    </div> 
    
  )
}
