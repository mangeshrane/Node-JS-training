import express, { json } from "express";
import { Emp } from "./Emp";
import { EmpoyeeDAO } from "./EmpoyeeDAO";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const employees = new EmpoyeeDAO();

app.get("/employees", (req, res) => {
    res.send(employees.list());
});

app.get("/employees/:id", (req, res) => {
    const list = employees.list().filter((emp: Emp) => {
        return emp.empno.toString() == req.params.id;
    });
    res.send(list[0]);
});

app.post("/employees", (req, res) => {
    employees.insert(new Emp(req.body.empno, req.body.ename, req.body.salary));
    res.send("Employee " + req.body.ename + " Added");
});

app.delete("/employees/:id", (req, res) => {
    employees.remove(Number(req.params.id));
    res.send(employees.list());
});

app.listen(3000, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log("server is listening on 3000");
});
