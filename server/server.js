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
    // foreign key seller_id references users(id)
    client.query("create table if not exists users (id UUID primary key, name STRING, password STRING)");
    client.query("create table if not exists my_product (id UUID primary key, seller_id UUID, name STRING, desc_text STRING, image STRING, price DECIMAL)");
    
})()


app.use(cors());
app.use(express.urlencoded())
app.use(express.json());

app.post("/createnewuser", async (req, res) => {

  console.log('create new user')
  console.log(req.body.name)
  var data = req.body
  if (!data.name || !data.password) {
    return res.status(400).send("Missing Parameters")
  }
  x = await client.query(`select id FROM USER WHERE name = '${data.name.replace('\n', '')}' and password = '${data.password.replace('\n', '')}`)
  if (x != null) {
    console.log(x)
    console.log('id alredy found, sign up instead')
  } else {
    c = await client.query(`INSERT INTO users (id, name, password) VALUES ('${uuidv4()}', '${data.name},' '${data.password}')`)
    res.send("Successfully created")
    console.log(c)
  }
  
}) 

app.post("/addnewproduct", async (req, res) => {
  
  var data = req.body
  if (!data.name || !data.desc_text || !data.price_text || !data.image){
    return res.status(400).send("Missing Parameters")
  }
  // c = await client.query(`INSERT INTO product (id, name, desc_text, image, price) VALUES ('${uuidv4()}', 'test', 'test', 'test_img', '2.0')`)
  seller_id = await client.query(req.user)
  c = await client.query(`INSERT INTO my_product (id, seller_id, name, desc_text, image, price) VALUES ('${uuidv4()}', '${seller_id}' '${data.name}', '${data.desc_text}', '${data.image}', '${data.price_text}')`)
  res.send("Successfully created ")
})

app.get("/filterproduct", async (req, res) => {
  console.log("show product")
  x = req.body
  c = await client.query(`select * FROM my_product WHERE name = ${x};`);
  x = res.json(c.rows)
})

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

