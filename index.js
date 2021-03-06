import { serve } from "https://deno.land/std@0.59.0/http/server.ts";

const server = serveTLS({
    "hostname": "127.0.0.1",
    "port": 8080,
    "certFile":"cert.pem",
    "keyFile":"private.pem"
})


console.log("Listening on port 8080");

for await (const req of server) {
   console.log(req.url);
   const headers = new Headers()
   headers.append("content-type", "application/json")
   req.respond({
        "headers": headers,
        body: JSON.stringify({"username": "nicolas", "id": "1234"})
    });
}

