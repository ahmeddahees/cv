const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.static('public'))
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});


const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ahmeddahees:2468@cluster0.20l5d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then((result) => {
        console.log(`Example app listening at http://localhost:${port}`)
    }).catch((err) => {
        consol.log(err);
    });






app.use(express.urlencoded({ extended: true }));


const { Schema } = mongoose;


const mycontacts = new Schema({
    firstname: String,
    subject: String,
    message: String,
    email: String,

});

app.get("/index", (req, res) => {
    res.render("/")
})
const contacts = mongoose.model("contacts", mycontacts);

app.post("/", (req, res) => {
    const contactss = new contacts(req.body);

    console.log(req.body);

    contactss.save()
        .then(result => {
            res.redirect("#hero")
            console.log(result)
        })
        .catch(err => {
            console.log(err);
        });
});;


app.get("/contact", (req, res) => {
    res.render("contact");
})



const detials = require("./modeul/ahmeddahees");


app.post("/a7a", (req, res) => {
    const detial = new detials(req.body);

    console.log(req.body);

    detial.save()
        .then(result => {
            res.render("klam");
            console.log(result)
        })
        .catch(err => {
            console.log(err);
        });
});;





app.get('/', (req, res) => {

    detials.find()
        .then((result) => {
            console.log(result)
            res.render("index", { photo: result });
        }).catch((err) => {
            consol.log(err);
        })



});



app.get("/klam", (req, res) => {
    res.render('klam')
})
app.get('/contact', (req, res) => {
    res.render('contact');
})

app.listen(port, () => {});


// app.get('/', (req, res) => {
//     res.render("index", );


// })