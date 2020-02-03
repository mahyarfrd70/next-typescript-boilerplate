# next-typescript-boilerplate

this repository is a boilerplate for nextjs and typescript project . we've tried use popular feature in this repo. we've developed this project with:

  - Nextjs
  - Typescript
  - Redux
  - Redux-Thunk
  - Docker
  - Jest
  - Enzyme
  - Eslint
  - Prettier

### How can you run it?
  - first you should clone it form repository.
  - open project on vscode and run ```npm install```
  - run ```npm run dev```for development mode
  - open **localhost:3000** on your browser

**note:** for production mode first you should run ```npm run build``` next run ```npm start``` then open **localhost:3000** on your browser.

#### Run with Docker
You can also run project with Docker.first you have to installed **Docker** and **Docker-Compose** on your system and then for run project with Docker in development mode run below command in command line:
```sh
    $ docker-compose build
    $ docker-compose up
```
open **localhost:3000** on your browser. and for production mode you should run : 
```sh
    $ docker-compose -f docker-compose.yml -f docker-compose.prod.yml build
    $ docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
```
and open **localhost:8081** on browser for production mode.

### File and Folder structure

there are some file and directory on root directory that I want to explain what each one does .
    
  - **server.js** is in root directory that is custom server for Nextjs.
  - **.eslintrc** and **.prettierrc** are in root directory that are for config Eslint and Prettier.
  - **jest.config.js** and **jest.setup.js** are in root directory that are config of test enviroment (**Jest** and **Enzyme**)
  - **next.config.js** is in root directory that is config of Nextjs for example you can customize webpack of Nextjs in this file.
  - **docker-compose.yml**, **docker-compose.prod.yml** and **docker-compose.override.yml** are config of docker-compose for production and development mode also there is **docker** directory in the root that we put **Dockerfile** in this folder
  - **pages** is a directory that explained in Nextjs website and used for routing in your project you can read more here [Nextjs Routing](https://nextjs.org/docs/routing/introduction)
  - **static** is a directory that structured as static folder with Nextjs. you can read about that here [Nextjs Static](https://nextjs.org/docs/basic-features/static-file-serving)
  - **.vscode** is directory **launch.json** exists in it and this file use for debug project on server side in Visual Studio Code.
  - **__test__** is directory that you can put your test file in it.
  - **src** is a directory . there are some directory in it such as:
    1. **components:** you should put your components in this folder
    2. **helpers:** you should put your helpers in this folder.also there are Service and Auth folder in it and Auth is a object that used for Authorization and Service is a object that use **axios** for call api.you can add another helper in this folder and use in project.
    3. **redux:** you should put your reducers and actions in this folder. also there are **RootReducer** and **Store** in this directory.
    4. **layout**: you should put your layout components in this folder.

#### Debug
you should open your project on vscode . go to vscode's debug tab in the left of window. on top of screen there is a green play button and a select box . click on select box and choose **Node Inspector** then click on green play button . set breakpoint on a line in vscode and open **localhost:3000** on browser .first your code run on server side that is why vscode have to stop your proccess on breakpoint.

#### Eslint Vscode
for linting eslint in your editor follow these steps:
  1. go to **settings** in vscode in bottom left corner of it.
  2. put below code in **setting.json** :
```
    // for js file
    "[javascript]": {
        // set default formatter for editor
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        // your code formated when save
        "editor.formatOnSave": true
    },
      // for jsx file
    "[javascriptreact]": {
        // set default formatter for editor
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        // your code formated when save
        "editor.formatOnSave": true
    },
    // for ts file
    "[typescript]": {
        // set default formatter for editor
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        // your code formated when save
        "editor.formatOnSave": true
    },
    // for tsx file
    "[typescriptreact]": {
        // set default formatter for editor
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        // your code formated when save
        "editor.formatOnSave": true
    },
    // validate eslint for these files
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    // set actions after save code
    "editor.codeActionsOnSave": {
        // fix error of eslint
        "eslint.autoFixOnSave": true,
        // integrate eslint with prettier
        "prettier.eslintIntegration": true,
    },
    "prettier.insertPragma": true,
    // path of perettier config file
    "prettier.configPath": ".prettierrc",
```


