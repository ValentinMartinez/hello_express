## Hello Express

Extremely simple application created for the course "DevOps with Docker" course. (Sorry for my bad English).

This app receives GET requests from the specified port (default: 8000) and return a 'Hello world' but written in Spanish. If you send a message at the end of the URL (like: '/ok' or '/ihatemyself'), the app's going to return that message too.

Also, in every request, the app returns a specified message (a 'backend message'). You can set that message in a environment variable (default = 'Mensaje por defecto') (And yes, I wanted to play with environment variables).


#### Prerequisites for development:

Install npm and NodeJs (at least v0.10).


#### Execute the application:

1. Run "npm install" to install all dependencies.

2. ***(Optional)*** Setup environment variables. These are: **PORT** and **BACKEND_MESSAGE**.

3. Run "npm start".


