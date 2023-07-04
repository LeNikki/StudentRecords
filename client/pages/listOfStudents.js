import React from 'react'
import Layout from "../components/layout"
import Link from "next/link"
import Head from "next/head"
import { useState } from 'react'
//import clientPromise from "../lib/mongodb";
//import { getServerSideProps } from './addNew'

export let prevInfo ={}
export default function ListOfStudents({studentCpE}) {
    //studentProp from getServerSideProps loads intial data
    const [student, setstudent] = useState(studentCpE);
    const [selectAll, setselectAll] = useState(false);
    
    //Get API req, loads new data when edited or deletd
    // async function GetData(){
    //     const res = await fetch("http://localhost:8000/students")
    //     const data = await res.json()
    //     setstudent(data)
    //     console.log("getting...")
    // }
    
    // async function DeleteData(studentId){
    //     const res = await fetch(`http://localhost:8000/students/${studentId}`,{
    //         method: "DELETE"
    //     })
    //     const data = res.json()
        
    //     window.alert("Deleted")
    //     GetData()
    // }
    // async function DeleteAll(){
    //     const allId=student.map(stud=>stud.id);
    //     console.log(allId)
    //     for (var i=0; i<allId.length; i++){
    //         var studId = allId[i];
    //         const res = await fetch(`http://localhost:8000/students/${studId}`,{
    //         method: "DELETE"
    //     })
    //     }
    //   //  const data = res.json()
        
    //     window.alert("Deleted All")
    //     GetData()
    // }

    function getStud(stud){
        console.log("update")
        prevInfo = stud
    }
    // function deleteAll(){
    //     const deleteAll = window.confirm("Are you sure you want to DELETE all data? This cannot be undone.");
    //     if(deleteAll){
    //         DeleteAll()
    //         GetData()
    //     }
    // }
   
   

  return (
    <Layout>
        
        <Head><title>List of students</title></Head>
    <div className='flex justify-center items-center flex-col bg-slate-300 mr-5 '>
        <section className='flex flex-row justify-around items-center w-40 h-10 bg-yellow-500'>
            <input
            type="checkbox"
            id="selectAll"
            checked={selectAll}
            onChange={()=>setselectAll(!selectAll)}
            />
            { selectAll? <button onClick={deleteAll} className='bg-red-400 h-10 p-2'>Delete All?</button> : <p>Select All</p> }
         </section>


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
//React needs to have all the required data before the page is rendered.
//allows dynamic load for constantly changing data
//THIS IS FOR server-json
// export async function getServerSideProps(){
//     const res = await fetch("http://localhost:8000/students") //server
//     const data = await res.json()

//     return{
//         props:{
//             studentProp: data
//         }
//     }
// }

//this is for mongodb: using getserverside props for rendering
/*export async function getServerSideProps(){
    
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
   
}*/

//or for calling our mongodb api
export async function getServerSideProps(){
    
    const res = await fetch ("http://localhost:3000/api/studentdb");
    const data = await res.json();
    //we need to stringify the data from json
    return {
        props: { studentCpE: data },
    };

}