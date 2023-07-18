import React from 'react'
import Layout from "../components/layout"
import Head from "next/head"
import { useState } from 'react'
import {prevInfo} from "./listOfStudents"

export default function updateData() {
//prevInfo holds the particular student info
  //This is the PUT request to update data
  const [Data, setData] = useState(" ")
 async function upData(){
  let stud = {
    id: prevInfo.id,
    name: studInfo.name,
    number: studInfo.num
  }
  const res = await fetch(`http://localhost:8000/students/${prevInfo.id}`,
  {
    method: "PUT",
    headers: {'Content-type': 'application/json'}, //TUNGOD SA HEADERS mao di ma submit kay header ra shunga ka ba HAHHAHA
    body: JSON.stringify(stud)
  })
  const resData = await res.json();
   if (res.ok) {
    
    setData(resData.message);
  } else {
    throw new Error('Request failed.');
  }
   console.log("edit data: " + resData.body)
   window.alert("Response Message: " + resData)
 }

 const [studInfo, setstudInfo] = useState({name: prevInfo.name, num: prevInfo.number})


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

function clear(){
  const name = document.getElementById("student_name")
  const number = document.getElementById("student_num")

  name.value = " "
  number.value = 0;
}

  return (
    <Layout>
        <Head><title>Update Info</title></Head>
        <div action ="/" method = "PUT" className=' flex flex-col'>
           <p>ID: {prevInfo.id}</p>
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
                <button  onClick= {upData} value="submit" className='mr-2 py-2 px-3 drop-shadow-md border border-solid border-slate-400 rounded w-30  bg-none  hover:bg-red-500'>Submit</button>
               
            <button type="reset" onClick = {clear} value="clear" className='mr-2 py-2 px-3 drop-shadow-md border border-solid border-slate-400 rounded w-30  bg-none  hover:bg-green-500' >Clear</button>
            </section>
        </div>
    </Layout>
  )
}
