# Mini Backend for Weather

In this exercise, you will be creating a mini backend for weather app and deploy it via render!

Before beginning, please visit [Weather app](https://www.weatherapi.com/) and get API key by signing up a **free** account

0. Please create a new remote repo in **your own github account** and link this cloned repo to it. (required when you deploy your backend). Here are the steps:
   - create a remote repo without reaadme.md 
   - open the terminal from this cloned repo, remove the current .git `rm -rf .git` and initialize a new git project `git init`
   - connect to your newly created remote repo with `git remote add origin ...`
   - add and commit all changes
   - rename the master branch to main & upstream push
1. Refresh your github website and make sure you're now working on your own repo
2. Initialize your node project with `server.js`
3. Create `.gitIgnore` file and include 
    - node_moudles
    - .env
4. In `package.json`, make sure your project is using ES6 module
5. Create `.env` file and add your weather API key
6. install express & middleware libraries 
    - express (server)
    - dotenv (to use environment variables)
    - cors (for bonus task 10)
7. Set up your server in `server.js` 
8. Define a route: with a path "/weather" for HTTP POST (yes, try POST request this time)
    - get the city input from req.body
    - fetch the weather data using weatherAPI
    - handle errors (no user input & wrong input)
    - send client a reasponse with the fetched data 
9. Test the endpoint. When it works successfully, push your code to your own repo and deploy your backend via render (make sure `.env` is not pushed, share the environment variables on render separately)
10. Share your deployed link via slack!
11. Bonus: Create a mini frontend and connect it to the deployed backend
    



