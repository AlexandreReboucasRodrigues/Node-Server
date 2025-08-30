
import http from 'http';

const PORT = 3333;

const server = http.createServer((request, response) => {

    // const url = request.url;
    // const method = request.method;

    const { url, method } = request;

    response.setHeader("Content-Type", "text/plain; charset=utf-8");

    response.write(`
        Requisição na url: ${url}
        Requisição no Método: ${method}
        `);
});


server.listen(PORT, 'localhost', () => {
    console.log(`Server running at http://localhost:${PORT}.`);
});