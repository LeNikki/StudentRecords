import React from 'react'
import Layout from "../components/layout"
import Head from "next/head"
import { useState } from 'react'
//import {prevInfo} from "./listOfStudents"
import clientPromise from '@/lib/mongodb'

// export async function GetData(){
//   const res = await fetch("http://localhost:8000/students");
//   const data = await res.json();
//   return data;
// }

export default function UpdateData({studentProp}) {
  //THIS IS FOR SERVER-JSON, do not remove
//prevInfo holds the particular student info
  //This is the PUT request to update data
 // const student = studentProp

//  async function upData(e){
//   e.preventDefault()
//   let stud = {
//     id: prevInfo.id,
//     name: studInfo.name,
//     number: studInfo.num
//   }

//   const index = student.find(takenVal=> takenVal.number == stud.number);
//   const stdn = student.find(takenVal=> takenVal.name == stud.name);
//   const ind = {index}
//   const stdName = {stdn}

//   if(prevInfo.name==stud.name){
//     //check is number is existing
//     if(ind.index!=null){
//       if(ind.index.number==stud.number){
//         window.alert("Number is already existing")
//       }
//       else{
//         const res = await fetch(`http://localhost:8000/students/${prevInfo.id}`,
//         {
//           method: "PUT",
//           headers: {'Content-type': 'application/json'}, //TUNGOD SA HEADERS mao di ma submit kay header ra shunga ka ba HAHHAHA
//           body: JSON.stringify(stud)
//         })
//         const data = await res.json() 
//           window.alert("Submitted Successfully") ;
//           clear() //clear input box 
//       }
//     }
//     else{
//       const res = await fetch(`http://localhost:8000/students/${prevInfo.id}`,
//       {
//         method: "PUT",
//         headers: {'Content-type': 'application/json'}, //TUNGOD SA HEADERS mao di ma submit kay header ra shunga ka ba HAHHAHA
//         body: JSON.stringify(stud)
//       })
//       const data = await res.json() 
//         window.alert("Submitted Successfully") ;
//         clear() //clear input box 
//     }
//   }
//   if(prevInfo.number==stud.number){
//     //check is number is existing
//     if(stdName.stdn!=null){
//       if(stdName.stdn.name==stud.name){
//         window.alert("Name is already existing")
//       }
//       else{
//         const res = await fetch(`http://localhost:8000/students/${prevInfo.id}`,
//         {
//           method: "PUT",
//           headers: {'Content-type': 'application/json'}, //TUNGOD SA HEADERS mao di ma submit kay header ra shunga ka ba HAHHAHA
//           body: JSON.stringify(stud)
//         })
//         const data = await res.json() 
//           window.alert("Submitted Successfully") ;
//           clear() //clear input box 
//       }
//     }
//     else{
//       const res = await fetch(`http://localhost:8000/students/${prevInfo.id}`,
//       {
//         method: "PUT",
//         headers: {'Content-type': 'application/json'}, //TUNGOD SA HEADERS mao di ma submit kay header ra shunga ka ba HAHHAHA
//         body: JSON.stringify(stud)
//       })
//       const data = await res.json() 
//         window.alert("Submitted Successfully") ;
//         clear() //clear input box 
//     }
//   }
//   else{
//     const res = await fetch(`http://localhost:8000/students/${prevInfo.id}`,
//     {
//       method: "PUT",
//       headers: {'Content-type': 'application/json'}, //TUNGOD SA HEADERS mao di ma submit kay header ra shunga ka ba HAHHAHA
//       body: JSON.stringify(stud)
//     })
//     const data = await res.json() 
//       window.alert("Submitted Successfully") ;
//       clear() //clear input box 
//   }
//   GetData()
//  }

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
        <form action ="/updateData" method = "PUT" className=' flex flex-col'>
           <p>ID: {prevInfo.id}</p>
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
             <label  className='font-semibold py-2 px-3 md:w-60 '>Please enter number: </label>
             <input type ="number"
                name = "number"
                id = "student_num"
                value={studInfo.num}
                onChange = {setNum}
                className=' appearance-none focus:drop-shadow-xl border-2 border-slate-300 rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-30 md:w-40'
                required
                minLength="10"
                maxLength="20"
            />
            </fieldset>
            <fieldset className='flex flex-row px-3 py-2'>
                <button  onClick= {upData} type="submit" value="submit" className='mr-2 py-2 px-3 drop-shadow-md border border-solid border-slate-400 rounded w-30  bg-none  hover:bg-red-500'>Submit</button>
               
            <button type="reset"  onClick = {clear} value="clear" className='mr-2 py-2 px-3 drop-shadow-md border border-solid border-slate-400 rounded w-30  bg-none  hover:bg-green-500' >Clear</button>
            </fieldset>
        </form>
    </Layout>
  )
}
//THIS IS FOR SERVER-JSON
// export async function getServerSideProps(){
//   const data = await GetData();
//   return{
//       props:{
//           studentProp: data
//       }
//   }
// }

//this is for mongodb:
export async function getServerSideProps(){
    
  const client = await clientPromise;
  const studentCPE_db = client.db("StudentsDb"); //name of db in mongodb

  const studentCPE = await studentCPE_db 
      .collection("StudentsCollection")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();
      
  return {
          props: { studentCpE: JSON.parse(JSON.stringify(studentCPE)) },
  };

}