import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Fireworking {

    tartServer(port);
    connectToDatabase(databaseUrl);

    function Server(_port: number | string): void {

        let server: Http.Server = Http.createServer();
        console.log("Server startet auf Port " + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);


        async function getAllData(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
            let result: Mongo.Cursor<any>
    }