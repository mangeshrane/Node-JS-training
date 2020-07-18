import express from "express";
import mongoose from "mongoose";
import { EmpModel } from "./models/employee.model";

const app = express();
const url = "mongodb+srv://testuser:testuser@xpanxioncluster.m7uzk.mongodb.net/mydb";
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/users", async (req, res) => {
    mongoose.connect(url);
    await EmpModel.find((error, users) => {
        if (!error) {
            res.send(users);
        } else {
            res.status(404).send({status: "No records found"});
        }
    });
    mongoose.disconnect();
});

app.get("/users/:id", async (req, res) => {
    mongoose.connect(url);
    await EmpModel.findById(req.params.id, (error, users) => {
        if (!error) {
            res.send(users);
        } else {
            res.status(404).send({status: "No records found"});
        }
    });
    mongoose.disconnect();
});

app.post("/users", async (req, res) => {
    mongoose.connect(url);
    try {
        const user = new EmpModel(
            {
                empno: req.body.empno,
                ename: req.body.ename,
                salary: req.body.salary,
            });
        await user.save();
        mongoose.disconnect();
    } catch (error) {
        res.status(400).send({status: "failed"});
    }
});

app.listen(3000, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log("server is listening on 3000");
});
