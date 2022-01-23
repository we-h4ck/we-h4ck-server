const express = require("express");

const Datastore = require("nedb");
const cors = require("cors");
var fs = require("fs");
var https = require("https");

const apiRouter = express.Router();

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));
app.use("/api", apiRouter);
https
    .createServer(
        {
            key: fs.readFileSync("server.key"),
            cert: fs.readFileSync("server.cert"),
        },
        app
    )
    .listen(5002, () => {
        console.log(`Backend started on port ${process.env.PORT || 5002}`);
    });

const database = new Datastore("database.db");
database.loadDatabase();

apiRouter.get("/", (req, res) => {
    res.redirect("/");
});

apiRouter.get("/get-crimes", (req, res) => {
    database.find({}, (err, data) => {
        if (err) {
            res.end();
            return;
        }
        res.json(data);
        console.log("The reponse was successfully sent!");
    });
});

apiRouter.post("/new-crime", (req, res) => {
    const data = req.body;
    database.insert(data);
    res.json(data);
    console.log(
        "The crime with the following informations:\n",
        data,
        "\nwas successfully created!"
    );
});
