var express = require("express")
var app = express();

Controllers = require("../controllers/controller")

const path = require("path")  ///

// / HOME PAGE

// GET methods
// /PRODUCTS  VIEW ALL
// /PRODUCTS EDIT PAGE
// /products/new  NEW PAGE

// POST methods
// /products/edit submit form
// /products/new submit form
// /delete

module.exports= function(app){
    app.get("/", function(req,res){
        console.log("******** ROUTES INDEX PAGE RUNNING");
        Controllers.index(req,res);
    })
    
    app.get("/products/all", function(req,res){
        console.log("******* ROUTES ALL PRODUCTS RUNNING");
        Controllers.allProducts(req,res);
    })

    app.get("/products/:id", function(req,res){
        console.log("******* ROUTES FIND CAKE BY ID RUNNING")
        Controllers.findProduct(req,res);
    })

    app.delete("/products/delete/:id", function(req,res){
        console.log("****** ROUTES DELETE RUNNING"+ req.params.id)
        Controllers.deleteProduct(req,res);
    })

    app.post("/products/new", function(req,res){
        console.log("******** ROUTES NEW PRODUCT POST RUNNING");
        Controllers.newProduct(req,res);
    })

    app.put("/products/edit/:id", function(req,res){
        console.log("******** ROUTES UPDATE PRODUCT POST RUNNING");
        Controllers.editProduct(req,res);
    })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      })
}
