import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Your Server is Ready");
});

app.get("/api/poems", (req, res) => {
  const poems = [
    {
      id: 1,
      title: "A Poem",
      content: "This is a Poem",
    },
    {
      id: 2,
      title: "Another Poem",
      content: "This is an another Poem",
    },
    {
      id: 3,
      title: "3rd Poem",
      content: "This is a 3rd Poem",
    },
    {
      id: 4,
      title: "4th Poem",
      content: "This is a 4th Poem",
    },
    {
      id: 5,
      title: "5th Poem",
      content: "This is a 5th Poem",
    },
  ];

  res.json(poems);
});

app.listen(port, () => {
  console.log(`The server is running at port ${port}`);
});
