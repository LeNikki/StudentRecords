import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("StudentsDb");
    const { id } = req.query;
    const { name, number } = req.body;

    const uniqueStud = await db.collection("StudentsCollection").updateOne(
      {
        _id: ObjectId(id),
      },
      {
        $set: {
          name: title,
          number: content,
        },
      }
    );

    res.json(uniqueStud);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};