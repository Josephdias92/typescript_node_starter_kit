# Typescript Node starter kit

## Requirements
  - Node >= 8.12
  - NPM >= 6.4.1

## Setup steps
  create .env file in root of the project and set "NODE_ENV", "SSL_CERT", "SSL_KEY", "LOG_PATH", "DB_HOSTNAME", "DB_PORT", "DB_NAME", "DB_USERID", "DB_PASSWORD". Refer to .env.default to know the required values. Contact [Joseph Dias](josephdias92@gmail.com) for the values to use in .env file.
  ```
  cd typescript_node_starter_kit
  npm install
  npm run build
  npm serve
  ```
  
## Npm Script Commands
  ```bash
    npm start # serves the file from dist folder so make sure you build before running this command
    npm run build # builds the src from ts to js along with all the static files
    npm run watch # used to watch ts file changes compiles and serves them. note. it doesnt copy changes from static files.
    npm run test # project uses jest as a testing framework. this command will output test results along with coverage report
    npm run watch-test # watches changes in *.spec.ts files
    npm run tslint # used to run linting on ts files
    npm run copy-static-assets # you can use to move static files from src to dist folder. make sure you mention the path in copyStaticAssets.ts file
    npm run debug # builds and runs debug on every file changes
  ```
  
## Swagger Docs
  ```
