const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();

var sampleProducts = []

var {Pool} = require("pg")
var client = null
var pool = new Pool({
    connectionString: "postgresql://caitlyn:0b3osWa9a8mvHMyroqhqNQ@venus-hacks-11450.6wr.aws-us-west-2.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full",
    application_name: "venus-hacks",
});

// Connect to database
// create schema
(async () => {
    client = await pool.connect();
    client.query("create table if not exists products (id UUID primary key, name STRING, desc_text STRING, price DECIMAL)");
    client.query("create table ")
    // console.log(client)
})()


app.use(cors());
app.use(express.urlencoded())
app.use(express.json());

app.post("/buynewitem", async (req, res)=> {

})

app.post("/addnewproduct", async (req, res) => {
  console.log("add new product")
  console.log(req.body)
  var data = req.body
  if (!data.name || !data.desc_text || !data.price){
    return res.status(400).send("Missing Parameters")
  }
  
  c = await client.query(`INSERT INTO products (id, name, desc_text, price) VALUES ('${uuidv4()}', '${data.name}', '${data.desc_text}', ${data.price})`)
  res.send("Successfully created ")
})

app.get("/showproduct", async (req, res) => {
  console.log("show product")
  c = await client.query(`select * FROM products;`);
  x = res.json(c.rows)
  // for (a in x){
  //   res.send(a["id"], a["name"], a["price"])
  // }
})

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

