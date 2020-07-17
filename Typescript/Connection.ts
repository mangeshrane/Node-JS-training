interface Connection {
    open(url: string, login: string, password?: string): void
    close(): void

}