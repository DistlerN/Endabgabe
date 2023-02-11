"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fireworking = void 0;
const Http = require("http");
var Fireworking;
(function (Fireworking) {
    tartServer(port);
    connectToDatabase(databaseUrl);
    function Server(_port) {
        let server = Http.createServer();
        console.log("Server startet auf Port " + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
        async function getAllData(_request, _response) {
            let result;
        }
    }
})(Fireworking = exports.Fireworking || (exports.Fireworking = {}));
//# sourceMappingURL=database.js.map