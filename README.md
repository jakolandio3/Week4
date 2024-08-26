# Week4tut - Jakob Douglas (3813ICT-2024)

## Angular Commands used:

_(requires Node)_

1. **npm i -g @angular/cli** _(Install Angular CLI Globally)_
2. **ng new "app name"** _(create a new Angular application in the directory "app name")_
3. **ng serve --open** _(run and open in browser the development server)_
4. **ng build** _(build dist files for production)_

5. **ng generate component component-name"** (_to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module)_

## Node modules:

1. **npm i -g @angular/cli** _(Install Angular CLI Globally)_
2. **npm i bootstrap -save** _(Install and save bootstrap locally for the project)_
   **\*_note: Bootstrap requires you to update the "styles" array in the angular.json file and add bootstrap css file {"node_modules/bootstrap/dist/css/bootstrap.min.css",}_**
3. **npm i cors -save** _(Install cors for cross origin handling)_
4. **npm i express** _(Install express for our back end in server folder)_
5. **npm i nodemon -g** _(Install global nodemon for hot-reload on our server side)_

## GIT Commands used:

1. **git init** _(Initialise local repository)_
2. **git add 'file'** _(Add file/s to be tracked)_
3. **git commit** _(commit the local changes with a message -m "message")_
4. **git remote add origin [url
   to your repo]** _(Add an alias for origin to remote repo (in this case on GitHub))_
5. **git push origin [branch]** _(push the changes to remote origin on branch specified)_
6. **git checkout -b [branch name]** _(Create a new local branch name and switching to that branch)_
7. **git merge [branch name]** _(Merge another branch with your currently opened branch)_
