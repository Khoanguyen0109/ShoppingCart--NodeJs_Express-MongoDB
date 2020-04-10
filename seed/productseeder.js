var Product = require('../models/product');

var mongoose  = require('mongoose')
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true } )

var products =[ 
    new Product({
        imagePath   :'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.phimmoi.net%2Fphim%2Fbiet-doi-sieu-anh-hung-4-hoi-ket-i15-7166%2F&psig=AOvVaw1S5A7mn6pat5EaxZmuKlo7&ust=1586580579300000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiPpLCH3egCFQAAAAAdAAAAABAD',
        title: 'Avengers',
        description : ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, recusandae debitis tenetur id repellendus excepturi enim, quam temporibus repudiandae nobis illo eius? Numquam nesciunt perspiciatis, quos necessitatibus beatae dolor ad',
        price :10

    })
]
var done =0;
for( var i =0; i< products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done === products.length){
            exit(); 
        }

    });
}
function exit(){
    mongoose.disconnect();
}