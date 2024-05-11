/*                                                      --------   Server   --------

A computer program or a device that provides services or resources to other computers or clients over a network, typically responding to requests sent by clients. 

*Program below is a module that works as a basic server which listens to a port for any requests made to that server. 
*/



import express from "express";

const app = express();

/*                                                      --------   PORT   --------

Port is a designated communication endpoint where the Express JS application listens for incoming network connections and requests from clients.

* GOOD PROGRAMMING PRACTICE
* Define your port as a variable which can be accessed anywhere in the module so that you dont face problems during deployment
*/

const PORT = process.env.PORT || 3000;

/*                                                      --------   Dummy Data Objects   --------

Mock Data Structures used for testing Express.js code prior to database integraton. 

*/

const mockUsers = [
    { id : 1, username : "anson", displayName: "Anson"},
    { id : 2, username : "kenson", displayName: "Kenson"},
    { id : 3, username : "benson", displayName: "Benson"}
];



/*                                                      --------   GET ROUTE   --------

Method used to get a response from the server

*SYNTAX
app.get('/path', (req, res) => {
    //Request Handling Logic
});

    - `app` is an instance of Express.
    - `.get()` is the method for handling a GET Request.
    - `'/path'` is the URL path for which the request handler will be invoked.
    - `(req, res)` are request and response objects representing the HTTP request and response.
    - The arrow function contains logic to handle the request and send a response. 

* GOOD PROGRAMMING PRACTICE
* Whenever defining a route for api use {{baseURL}}/api/path to make your endpoint
  indicates the route is part of an API and separates API routes from serving static content or HTML Pages
*/

/*                                                      --------   ROOT ENPOINT  --------

Root Endpoint  

*SYNTAX
/:{{variableName}}

*/

app.get('/', (req, res) => {
    res.send("hello world")
});

/*                                                      --------   ROUTE PARAMETERS IN ENDPOINTS  --------

Dynamic Values that are part of URL Path, used for capturing variable data for capturing variable data from client requests.  

*SYNTAX
/:{{variableName}}

*/


app.get('/api/users', (req, res) =>{
        res.send(mockUsers);
}
);

/*                                                      --------   ROUTE Parameters  --------

Dynamic Values that are part of URL Path, used for capturing variable data for capturing variable data from client requests.  

/:{{variableName}}

*/

app.get('/api/users/:id', (req, res) => {   
    console.log(req.params)
        const parsedId = parseInt(req.params.id);
        if (isNaN(parsedId))
           return res.sendStatus(400);
        const findUser = mockUsers.find((user) => user.id === parsedId);
        if(!findUser) return res.sendStatus(404);
        return res.send(findUser)
}
);

app.get('/api/products', (req, res) =>{
    res.send([
        { id : 123, name : "Paneer Tikka", displayName: "299"}
    ]);
}
);

// localhost:300
// localhost:3000/users
// localhost:3000/products

/*                                                   ----------   LISTEN    -----------

The    `app.listen()` function in Express.js is used to start a server and make it listen for incoming connetions on a specified port. 

*/
app.listen( PORT, () => {
    console.log (`App Running on Port ${PORT}`);
})

