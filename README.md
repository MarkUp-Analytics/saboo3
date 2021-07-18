# saboo3
## Instrunctions on how to install this application
1. Check whether node is installed in your machine by entering the below command in a terminal and press enter
    `node -v`<br>
2. If you have installed, the above command will display which version of node your machine has. If it is not installed, download node from this link https://nodejs.org/en/download/
3. After the installation, clone the code repo into your machine. You can use git desktop app to do that. You can download the app from this link `https://git-scm.com/downloads`
4. My recommendation for IDE would be VS Code. This is not required but will be very useful to edit the code and run the application. You can download VS Code from this link `https://code.visualstudio.com/Download`
5. Using VS Code open the saboo3 folder.
6. Using the terminal present in the VS code, go inside `www` folder using this command
    `cd www`<br>
7. Run the following commands in the same terminal
    `npm install`<br>
    `npm run serve`<br>    
8. You will see an URL if you follow the above instructions. Click on the link to see the app.     

## Instrunctions on how to install mongo DB

Following instructions are for MAC

* Check brew is intalled using the following command 
    <br>
    `brew --version`
    <br>
* If it's not installed, install it using the following command
    <br> 
    `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"` <br>
* Install mongoDB in your system using the below commands
    <br>
    `brew tap mongodb/brew`
    <br>
    `brew install mongodb-community@5.0`
    <br>
* Install mongo shell using the command
    <br>
    `brew install mongosh`
    <br>   
* Start mongodb service using the command
    `brew services start mongodb-community@5.0`
* Now you can connect to the test DB named `testApp` using the command in a terminal
    <br>
    `mongosh "mongodb://localhost:27017/testApp?retryWrites=true"`
    <br>       

## Instrunctions on how to run express js server

* cd into express_server folder using the cmd
    `cd express_server`
* Run the following commands in the same terminal
    <br>`npm install`<br>
    `npm run start`<br>      
* You will see an URL if you follow the above instructions. Click on the link to see the server app.     
* Try the following link to see different API
    `http://localhost:3000/test/testOne`<br>
    `http://localhost:3000/test/testTwo`<br>