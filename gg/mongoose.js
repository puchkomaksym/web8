var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://romchick:123@cluster0.unuad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',  { useNewUrlParser: true } );
console.log("mongodb connect...")
module.exports=mongoose;
