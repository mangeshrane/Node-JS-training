# Node JS training

## Typescript Basics

1. Create a Connection interface with open and close methods
        open (url, login , password )--> password as optional parameter
            -> console.log("method name , parameters...)
    
2. Create two classes OracleConnection and SQLConnection implementing connection class
    
3. Test the code 
        
4. Create 
    
    `Emp (empno, ename, salary)
        class Emp { 
        empno: number;
        ename: string
        salary: number
    }`
    
5. Create EmpDAO class
        constructor to accept Connection object
        Variable - arr:Array<Emp> = new Array()
        Methods
        Insert - accept Emp object            -> con.open(); console.log("in insert"); con.close()
        List - list the employees.

## Express Setup with TypeScript
    
1. create a folder expressjs

2. on cmd prompt execute 
        
        `npm init -y`

3. Option 1-

            npm install --save-dev typescript@3.3.3
            npm install --save-dev tslint@5.12.1
            npm install --save express@4.16.4
            npm install --save-dev @types/express@4.161
        
4. Option 2 - modify package.json to include 
            
            "devDependencies": {
                "@types/express": "^4.16.1",
                "tslint": "^5.12.1",
                "typescript": "^3.3.3"
                },
            "dependencies": {
                "express": "^4.16.4"
                }
and invoke 

    `npm install`
    
    node_modules\.bin\tsc.cmd -init
    
    node_modules\.bin\tslint.cmd –init (tslint.json)

Modify package.json To include script line

        ` "start": "tsc && node dist/index.js" `

Starting server:

        `npm start`
    
