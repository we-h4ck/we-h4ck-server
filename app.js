const express = require("express");

const Datastore = require("nedb");
const cors = require("cors");

const apiRouter = express.Router();

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));
app.use("/api", apiRouter);
app.listen(process.env.PORT || 5002, () =>
    console.log(`Backend started on port ${process.env.PORT || 5002}`)
);

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
