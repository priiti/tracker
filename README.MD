# tracker

### For backend server
ESLint:
* Install  eslint (and nodemon)
* Script for package.json
..* "start": "./node_modules/nodemon/bin/nodemon.js src/app.js --exec 'npm run lint && node'",
..* "lint": "./node_modules/.bin/eslint **/*.js"
* node ./node_modules/eslint/bin/eslint.js --init
* Popular -> Standard -> JS