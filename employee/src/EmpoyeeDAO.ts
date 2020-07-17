import { Emp } from "./Emp";

export class EmpoyeeDAO {

    private employees: Emp[] = new Array();
    public insert(emp: Emp) {
        this.employees.push(emp);
    }
    public list() {
        return this.employees;
    }
    public remove(empno: number) {
        this.employees = this.employees.filter((employee) => {
            return employee.empno != empno;
        });
    }
}
