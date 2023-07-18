//fetch api
import getStudentData from "./index"

//
export default function handler (res,req){
    const [studentId] = req.query //query
    const student = getStudentData() //object data {stud:data all students}
   
     const index = student.find(stud => stud.id === parseInt(studentId))
    if (req.method === "DELETE"){
       
        student.splice(index, 1)
        res.status(202).json(index)
    }
    else if (req.method === "PUT"){
      const index = student.find(stud => stud.id === parseInt(studentId))
      const data = req.body
    
      if (!index) {
        res.status(404).json({ message: 'Student not found.' });
        throw new Error("'Student not found.'")
      }
      student[index]=data
      res.status(202).json(data)  //return status and the data pushed 
      
    }
    
}

