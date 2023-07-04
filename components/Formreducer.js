export const initialState = {
    sName: " ",
    sNum: 0
  }
  
export default function reducerMethod(state, action){
    switch(action.type){
     case "setStudentName":{
       state.sName = action.in_value
     }
     case "setStudentNum":{
       state.sNum = action.in_value
     }
     default: break;
    }
    return state
  }