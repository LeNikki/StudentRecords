import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("StudentsDb");
    const { name, number } = req.body;

    const post = await db.collection("StudentsCollection").insertOne({
      name, number
    });

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};