var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/productmgr");
mongoose.Promise = global.Promise;

const ProductModel = new mongoose.Schema({
    title: {type: String, required: [true], minlength: [4, "Product title must be min 4 char long"]},
    price: {type: Number, required: true},
    url: {type: String, required: false}
})
mongoose.model("Product", ProductModel);

module.exports = {
    product: mongoose.model("Product")
}