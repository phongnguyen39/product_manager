var express = require("express")
var app = express();

var Product = require("../models/product").product;

module.exports = {
    index: function(req,res){
        console.log("******** CONTROLLER INDEX PAGE RUNNING")
        Product.find({}, function(err, products){
            res.json(products);
        })
    },
    newProduct: function(req,res){
        console.log("******** CONTROLLER NEW PRODUCT RUNNING")
        console.log(req.body);
        var product = new Product(req.body);
        product.save(function(err){
            if(err){
                console.log(err);
                res.json(product);
            } else{
                console.log("****** CONTROLLER PRODUCT SAVED ")
                res.json(product);
            }
        }) 
    },
    allProducts: function(req,res){
        console.log("******** CONTROLLER VIEW ALL PRODUCTS RUNNING")
        Product.find({}, function(err, product){
            console.log(product);
            res.json(product)
        })
    },
    findProduct: function(req,res){
        console.log("******** CONTROLLER FIND PRODUCT BY ID RUNNING")
        Product.findById(req.params.id, function(err,product){
            if(err){
                console.log("***** CONTROLLER FIND PRODUCT ERROR");
                res.json(product);
            }else{
                console.log("*****************************************")
                console.log(product)
                console.log("***** CONTROLLER PRODUCT FOUND");
                res.json(product);
            }
            
        })
    },
    deleteProduct: function(req,res){
        console.log(req.params.id)
        console.log("******** CONTROLLER DELETE PRODUCT RUNNING" + req.params.id)
        Product.findByIdAndRemove(req.params.id, function(err,data){
            console.log(err)
            console.log("******REMOVEEEED*******")
            res.json(data)
        })
    },
    editProduct: function(req,res){
        console.log("****** CONTROLLER ENTERED" + req.params.id)
        console.log("****** CONTROLLER ENTERED" + req.body.title + req.body.price + req.body.url)
        Product.findByIdAndUpdate({_id:req.params.id}, {title:req.body.title, url:req.body.url,price:req.body.price}, function(err,product){
            if(err){
                console.log("**********CONTROLLER UPDATE FAILED");
                console.log(err);
                // res.json({errorMsg:"Something went wrong", error:err});
                res.json(err);
            } else{
                console.log(product)
                console.log("***********CONTROLLER UPDATE SUCCESSFUL")
                res.json(product);
            }
        })
    }
}
