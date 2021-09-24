import { storeQuestion, getAnswer } from "../../lib/membean";

const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      try {
        var data = JSON.parse(req.body.data);
        console.log(JSON.stringify(data));
        console.log(await storeQuestion(data.question, data.answer));
        return res.status(200).json({ status: "Success" });
      } catch (err) {
        console.log(err + " " + err.message);
        res.status(500).json({ statusCode: 500, message: err.message });
      }

      break;
    case "GET":
      try {
        const { question } = req.query;

        const answer = await getAnswer(question);
        if (answer !== []) {
          return res.status(200).json({ answer: answer });
        } else {
          return res.status(500).json({
            statusCode: 500,
            message: "No stored answer for this question",
          });
        }
      } catch (err) {
        console.log(err + " " + err.message);
        res.status(500).json({ statusCode: 500, message: err.message });
      }
      break;
    default:
      res.setHeader("Allow", "POST, GET");
      res.status(405).end(`Method ${req.method} not allowed`);
  }
};
export default handler;
