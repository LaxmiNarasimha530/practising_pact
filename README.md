# Practising Pact: Tuesday 31 October

## Get set up

### Assumptions:

This should work with Node 8 and yarn. I haven't tested other set ups.

### 1. Fork the repository

* Navigate to your copy on github
* Clone it
* Invite your pair as a collaborator

The front end should look something like this: 

```bash

├── data
│   └── data.js
├── dist
│   └── index.html
├── logs
├── package.json
├── pacts
├── src
│   ├── App.js
│   ├── components
│   │   ├── Button.js
│   │   ├── Button.test.js
│   │   ├── Display.js
│   │   └── index.js
│   ├── helpers
│   │   ├── httpRequests.js
│   │   ├── httpRequests.test.js
│   │   └── index.js
│   └── index.js
└── webpack.config.js
```

### 2. Get the front end running

```bash
cd frontend
yarn # or npm install
yarn start # or npm start
```

The very rudimentary front end should now be running on `localhost:3000`

### 3. Have a look at the front end tests, particularly the one for the helper:

`vi frontend/src/helpers/httpRequests.test.js`

### 4 Have a look at the back end
It should look something like this: 

```bash
├── app.js
├── app.test.js
├── data
│   └── data.js
├── package.json
└── pacts
```

### 5 Get the back end running

```bash
yarn start # or npm start
```

The back end should now be running on `localhost:5000`

### 6 Check that it's all wired together properly

In the frontend, click the 'Get data from local API' button
You should see a change in the contents underneath.



