const path=require("path");
const htmlplugin=require("html-webpack-plugin");
module.exports={
    mode:"development",
    entry:{
        main:path.resolve(__dirname, "src/app.js"),
        // some:path.resolve(__dirname,"src/index.js")
},
output:{
    path:path.resolve(__dirname, "dist"),
    filename:"[name].[contenthash].js",
    clean:true
},
//loaders
devtool:"inline-source-map",
devServer:{
static:{
   directory:path.resolve(__dirname,"dist")
},
open:true,
watchFiles:["src/*.html"],
hot:true
},
module:{
rules:[
    {
        test:/\.css$/,
        use:["style-loader","css-loader"]
    },{
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
            loader:"babel-loader",
            options:{
            presets:["@babel/preset-react"]
            }
        }
    }
]

},
//plugins
plugins:[
new htmlplugin({
    title:"hellowebpack",
    filename:"index.html",
    template:path.resolve(__dirname,"src/template.html")
})    
]
    
}