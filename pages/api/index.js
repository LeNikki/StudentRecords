//fetch api
//fetch api
export async function getStudentData(){
    const res = await fetch("http://localhost:8000/students")
    const data = await res.json()

    return {stud:data}
}

//handle API requests
export default function handler (res,req){
    const stud = getStudentData()
    const student = stud.stud

    if (req.method ==="GET"){
        res.status(200).json(student)
    }
    else if (req.method === "POST"){
        const data = req.body //get the body of the request
        const index = student.find(takenVal=>takenVal.number == data.number)
        if(!index){
            student.push(data) //push it to database
            res.status(201).json(data)  //return status and the data pushed
            
        }
        else{
            throw new Error("Student already Exists")
        }
        
    }
    
}