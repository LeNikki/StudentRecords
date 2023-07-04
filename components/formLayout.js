import React from 'react'
import { useReducer } from 'react'

export default function FormLayout({props}) {
  const initialState = {
    sName: " ",
    sNum: 0
  }
  
  function reducerMethod(state, action){
    switch(action.type){
     case "setStudentName":{
       state.sName = action.value
     }
     case "setStudentNum":{
       state.sNum = action.value
     }
     default: break;
    }
    return state
}
  
  const [state, dispatch] = useReducer(reducerMethod, initialState)

   function handleName(e) {
    dispatch({ type: 'setStudentName', in_value: e.target.value});
  }
  function handleNum(e) {
    dispatch({ type: 'setStudentNum', in_value: e.target.value});
  }

    function clear(){
        const name = document.getElementById("student_name")
        const number = document.getElementById("student_num")
    
        name.value = " "
        number.value = 0;
      }
      
  return (
        <div action ="/" method = {props.method} className=' flex flex-col'>
       
           <section className='flex flex-row my-2'>
           <label  className='font-semibold py-2 px-3 w-30 md:w-60'>Please enter name: </label>
            <input type = "text"
                name = "name"
                id = "student_name"
                value={state.sName}
                onChange = {handleName(e)}
                className=' appearance-none focus:drop-shadow-xl border-2 border-slate-300 rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-30 md:w-40'
            />
            </section>
            <section  className='flex flex-row my-2'>
             <label  className='font-semibold py-2 px-3 md:w-60 '>Please enter number: </label>
             <input type ="number"
                name = "number"
                id = "student_num"
                value={state.sNum}
                onChange = {handleNum(e)}
                className=' appearance-none focus:drop-shadow-xl border-2 border-slate-300 rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-30 md:w-40'
            />
            </section>
            <section className='flex flex-row px-3 py-2'>
                <button  onClick= {props.submitForm} value="submit" className='mr-2 py-2 px-3 drop-shadow-md border border-solid border-slate-400 rounded w-30  bg-none  hover:bg-red-500'>Submit</button>
               
            <button type="reset" onClick = {clear} value="clear" className='mr-2 py-2 px-3 drop-shadow-md border border-solid border-slate-400 rounded w-30  bg-none  hover:bg-green-500' >Clear</button>
            </section>
        </div>
  )
}
