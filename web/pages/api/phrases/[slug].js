import mongoClient from "../../../lib/mongoClient";

export default async function handler(req, res) {
  const { method } = req;
  const slug = req?.query?.slug;
  if (!slug) {
    return res.status(400).json({ success: false });
  }
  switch (method) {
    case "GET":
      try {
        const client = await mongoClient;
        const db = client.db("wordd");
        const collection = db.collection("phrases");
        const phrase = await collection.findOne({ slug });

        res.status(200).json({ success: true, doc: phrase });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
