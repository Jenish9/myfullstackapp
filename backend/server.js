const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 5000;

const pool = new Pool({
  host: "db",
  user: "postgres",
  password: "postgres",
  database: "appdb",
  port: 5432,
});

app.get("/health", (req, res) => {
	          res.status(200).send("OK");
});

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json({ time: result.rows[0] });
});

app.listen(port,"0.0.0.0", () => {
  console.log(`Backend running on port ${port}`);
});
