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

/*                                                   ----------   LISTEN    -----------

The    `app.listen()` function in Express.js is used to start a server and make it listen for incoming connetions on a specified port. 

*/
app.listen( PORT, () => {
    console.log (`App Running on Port ${PORT}`);
})

