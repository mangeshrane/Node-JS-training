class OracleConnection implements Connection {
    close(): void {
        console.log("closing connection")
    }
    open(url: string, login: string, password?: string): void {
        console.log("Oracle open", url, login, password)
    }

}