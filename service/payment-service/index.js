import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.post("/payment-service", async (req, res) => {
  const { cart } = req.body;

  const userId = "123";

  //TODO:PAYMENT
  console.log("API endpoint hit!");

  //KAFKA

  return res.status(200).send("Payment succesfull");
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message);
});

app.listen(8000, () => {
  console.log("Payment service is running on port 8000");
});
