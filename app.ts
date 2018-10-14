import * as http from 'http';
import { MongoClient } from 'mongodb';

console.log('Hello world');

console.log('ok');

const port = 3000;

const requestHandler = (request: http.IncomingMessage, response: http.ServerResponse) => {
    console.log(request.url)
    // express
    let user: { name: string, age: number, url: string} = {
        name: 'Tom',
        age: 666,
        url: request.url
    };

    MongoClient.connect("mongodb://localhost:11666", (err, client) => {
        client.db("TestDB").collection("DemoEntity").find({}).toArray((err, docs) => {
            response.end(JSON.stringify(docs));
        });
    });
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})



