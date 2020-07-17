class EmpoyeeDAO {
    connection: Connection;
    arr: Array<Emp> = new Array();
    constructor(connection: Connection) {
        this.connection = connection;
    }
    insert(emp: Emp) {
        this.connection.open("test", "login");
        console.log("insert method", emp.ename);
        this.connection.close();
        this.arr.push(emp);
    }
    list() {
        console.log("list");
        console.log(this.arr);
    }
}
