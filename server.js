const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// Home route
app.get("/", (req, res) => {
    res.send("Backend Running Successfully");
});


// Statistics API
app.get("/stats", (req, res) => {

    const stats = {
        treatmentGap: "93%",
        receiveCare: "10-23%",
        relapseRate: "40-60%"
    };

    res.json(stats);
});


// Recovery help API
app.post("/help", (req, res) => {

    const name = req.body.name;
    const issue = req.body.issue;

    console.log("New Help Request:");
    console.log("Name:", name);
    console.log("Issue:", issue);

    res.json({
        message: "Request received successfully"
    });
});


app.listen(5000, () => {
    console.log("Server running on port 5000");
});