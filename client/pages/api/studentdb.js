import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("StudentsDb");

    const studentCPE = await db
      .collection("StudentsCollection")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    res.json(studentCPE);
  } catch (e) {
    console.error(e);
  }
};






