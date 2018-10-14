"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const mongodb_1 = require("mongodb");
console.log('Hello world');
console.log('ok');
const port = 3000;
const requestHandler = (request, response) => {
    console.log(request.url);
    // express
    let user = {
        name: 'Tom',
        age: 666,
        url: request.url
    };
    mongodb_1.MongoClient.connect("mongodb://localhost:11666", (err, client) => {
        client.db("TestDB").collection("DemoEntity").find({}).toArray((err, docs) => {
            response.end(JSON.stringify(docs));
        });
    });
};
const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map