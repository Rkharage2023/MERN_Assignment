const express = require("express");
const app = express();
const port = 4000

//get method url: http://localhost:4000/test
app.get("/test",(request,response) => {
    response.send("Hello from server side");
});

const fruitArray = [
        { name: "Apple", color: "red", price: 100 },
        { name: "Banana", color: "yellow", price: 10 },
        { name: "Mango", color: "yellow", price: 50 },
        { name: "Stawberry", color: "red", price: 5 },
        { name: "Orange", color: "orange", price: 20 },
        { name: "Kiwi", color: "brown", price: 200 },
      ];
app.get("./fruit",(request,response) => {

      response.send({
        status: "success",
        message: "Fruits",
        fruitArray: fruitArray
      });
});

//post 
app.post("/login",(request,response) => {
    response.send("post is called")
})

//put 
app.put("/update",(request,response) => {
    response.send("put is called");
});

//deleted
app.delete("/delete",(request,response) => {
    response.send("delete is called");
});

app.listen(port,() => {
    console.log(`hello from server on port ${port}`);
    
})