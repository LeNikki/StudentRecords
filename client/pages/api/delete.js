import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
 
    const client = await clientPromise;
    const db = client.db("StudentsDb");
  
    
  const studentId = req.body.idNumber; // Access idNumber from the request body
  const query = { idNumber: studentId };

    const result = await db.collection("StudentsDb").deleteOne(query);
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
  

};






