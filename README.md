# webdevatuic
Setup app guide for web development using node +  express + git + github + sublime

## 1. Setup Tools
* Verify nodeJS version. ```$ node --version```
* Verify npm version. ```$ npm --version```
* Verify git version. ```$ git --version```
* Verify sublime version. ```$ subl --version```

## 2. Setup Web App Framework (Express JS)
* Create a local repository. ```$ cd desktop && mkdir lastname-022317 && cd lastname-022317```
* Launch sublime text editor. ```$ subl .```
* Create simple express tree. ```$ mkdir public && mkdir views```
```
+-- lastname-022317
| `-- public
| `-- views
```
* Create ```package.json```. ```$ npm init -y```
* Install express as dependency. ```$ npm install express --save```
* Create new file ```app.js``` then write the following server script:
```javascript
//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
//express server listen
var server = app.listen(3001, function(){
  console.log('Server listening on port 3001');
});
```

## 3. Upload files to remote repository (Github)
* Create new github remote repository
* Create ```.gitignore``` file and write ```node_modules``` inside.
* ```$ git init```
* ```$ git config user.email "youremailusedingithub@domain.com"```
* ```$ git config user.name "yourgithubname"```
* ```$ git status```
* ```$ git add .```
* ```$ git commit -m "my first commit"```
* ```$ git remote add origin https://github.com/yourgithubusername/yourgithubrepo.git```
* ```$ git push -u origin master```