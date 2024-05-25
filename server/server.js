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
    client.query("create table if not exists product (id UUID primary key, name STRING, desc_text STRING, image STRING, price DECIMAL)");
    client.query("create table if not exists users (id UUID primary key, name STRING, password STRING)")
    // console.log(client)
})()


app.use(cors());
app.use(express.urlencoded())
app.use(express.json());

app.post("/createnewuser", async (req, res) => {
  console.log('create new user')
  c = await client.query(``)
}) 

app.post("/addnewproduct", async (req, res) => {
  console.log("add new product")
  console.log(req.body)
  var data = req.body
  console.log(data)
  console.log(typeof(data.price_text))
  console.log(data.name, data.desc_text, data.price_text, data.image)
  if (!data.name || !data.desc_text || !data.price_text || !data.image){
    return res.status(400).send("Missing Parameters")
  }
  console.log(`('${uuidv4()}', '${data.name}', '${data.desc_text}', '${data.image}', ${data.price_text})`)
  // c = await client.query(`INSERT INTO product (id, name, desc_text, image, price) VALUES ('${uuidv4()}', 'test', 'test', 'test_img', '2.0')`)
  c = await client.query(`INSERT INTO product (id, name, desc_text, image, price) VALUES ('${uuidv4()}', '${data.name}', '${data.desc_text}', '${data.image}', '${data.price_text}')`)
  res.send("Successfully created ")
})

app.get("/showproduct", async (req, res) => {
  console.log("show product")
  x = req.body
  c = await client.query(`select * FROM product WHERE name == ${x};`);
  x = res.json(c.rows)
  // for (a in x){
  //   res.send(a["id"], a["name"], a["price"])
  // }
})

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

