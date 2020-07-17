class SQLConnection implements Connection {
    open(url: string, login: string, password?: string): void {
        console.log("SQL open", url, login, password)
    }
    close(): void {
        console.log("closing connection")
    }
}