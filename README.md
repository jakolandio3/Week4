# Week4/5tut - Jakob Douglas (3813ICT-2024)

## Updated to week 5 content

### New Content(week5):

Link to Video explanation:

Part1:
https://www.loom.com/share/8a2244d29629438da6923656d7156da9

Part2:
https://www.loom.com/share/a96b98de30a04479b0e99bbd5a00da81

1. Server implemented with expressJS in folder src/server
2. Login action now makes a call to the remote server running from express
3. Services folder implemented in Angular App
4. Check-Auth service takes care of Login/Out and Updating User and is available as an injectable dependency to use in all root components
5. Failed auth checks will redirect to login
6. On successful login/auth check additional links to Profile and Edit profile are available
7. A logout button is shown if user is logged in and will logout and redirect user to login on click
8. A component for editing user details is available under profile
9. Profile will check validation of user and redirect back to login if user is not logged in
10. User Data when fetched is stored in sessionStorage and updated/removed accordingly

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
