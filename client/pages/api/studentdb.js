import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("StudentsDb");
    const collectionName = req.query.collection; 
    switch(req.method){
      case "GET": {
        const studentCPE = await db
          .collection(collectionName)
          .find({})
          .sort({ metacritic: -1 })
          .limit(10)
          .toArray();
          res.status(400).json(studentCPE);
      } break;
      case "POST": {
        const { name, number } = req.body; //the object that we will pus is {name: "SNdjnfjn", number: "34534"}
        const nameExist = await db.collection(collectionName).findOne({ name});
        const numExist = await db.collection(collectionName).findOne({number});
        if (nameExist) {
          // Data exists in the collection
          console.log('Data exists:');
          res.json({ message: 'Error. Student name exists' });
        } 
        else if(numExist){
            // Data exists in the collection
            console.log('Data exists:');
            res.json({ message: 'Error. Student number exists' });
        }
        else if(numExist && nameExist){
          // Data exists in the collection
          console.log('Data exists:');
          res.json({ message: 'Error. Student name and number exists' });
         }
        else {
          // Data does not exist in the collection
          const studentCPE = await db.collection(collectionName).insertOne({name, number});
          res.status(400).json({ data: studentCPE, message: 'Successfully added new student.' });
        }
       
      } break;
      case 'DELETE': {
        const deleteAll = await req.body.deleteAll
        if(deleteAll){
          const result = await db.collection(collectionName).deleteMany({});
          if (result.deletedCount >= 1) {
            res.json({message: "Successfully deleted all document. " + deleteAll});
          } else {
            console.log("No documents matched the query. Deleted 0 documents.");
          }
        }
        else{
          const studentId = req.body.idNumber; // Access idNumber from the request body
          const query = { id: studentId }; //in the database we have: {_id, id, name, number}.. we will query the "id"
          const result = await db.collection(collectionName).deleteOne(query);
          if (result.deletedCount === 1) {
            res.json({message: "Successfully deleted one document. " + deleteAll});
          } else {
            console.log("No documents matched the query. Deleted 0 documents.");
          }
        }
       
      } break;
      
    }
  }
  catch (e) {
    console.error(e);
  }
  
}






