var http = require('http'); //Inlcude built-in module to transfer data over the HTTP.

// Create HTTP server object.
http.createServer(
    function(req,res){
        /* Include the suitable(html) header to be dispalyed the server response in html*/
        res.writeHead(200,{'Content-Type': 'text/html'}); 
        res.write("This is an private network!."); // Write the response to the client.
        res.end(); // End the response.
        
    }
).listen(8080); // Port 8080 is listened by HTTP server object.
