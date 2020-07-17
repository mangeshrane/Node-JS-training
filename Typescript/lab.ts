let connection: Connection = new OracleConnection()
connection.open("test", "uname")
connection.open("test", "uname", "pass")

let connection1: Connection = new SQLConnection()
connection1.open("test", "uname")
connection1.open("test", "uname", "pass")


let emp = new Emp(1, "test", 30000)
let emp1 = new Emp(1, "test", 30000)

let dao = new EmpoyeeDAO(new OracleConnection())

dao.insert(emp)
dao.insert(emp1)

dao.list()
