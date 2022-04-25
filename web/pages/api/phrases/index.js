import mongoClient from "../../../lib/mongoClient";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const client = await mongoClient;
        const db = client.db("wordd");
        const collection = db.collection("phrases");
        const phrases = await collection.find({}).toArray();

        res.status(200).json({ success: true, phrases });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
