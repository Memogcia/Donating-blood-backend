# Blooders
### What is Blooders?
Blooders is an online platform that helps to look for matches for blood donations and listing nearby hospitals. It allows users to register and keep track of any blood donations they've made.
### Installation
Blooders runs utilizing NodeJs and the installation already assumes the target machine has it.
1. Git clone the repository
```git clone https://github.com/AlanAlv/blood```
2. Install node dependencies inside the containing directory
```npm install```
3. Run with command
```npm run dev```

To access the application, go to http://localhost:8080
### As a user
Inside the application, you have the ability to:
* Check nearby hospitals
* Register to Blooders
* Check donation prerequisites
* Make a donation request
### As a developer
The application uses VueJs in conjuction with ExpressJs. To make any significant changes you will need to implement vue templates on the /src folder. For endpoint management, you are encouraged to checkout the noderoutes.js under the /routes directory. Finally, you can edit the models stored by the Mongo Database under /models