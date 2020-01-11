# starter-app
A basic app I can use to bootstrap future builds. Contains: React, Redux, Sass, Electron, Bootstrap, icons

## Initializing a new repository
    git init new-repo-name
    cd new-repo-name
    git pull https://github.com/LesserChance/starter-app.git
    echo "# new-repo-name" > README.md
    git add README.md
    git commit -m "initial commit"
    git remote add origin git@github.com:LesserChance/<new-repo-name>.git
    git push -u origin master

```yarn install``` - Install initial dependencies

## Development
```yarn start``` - Start the web app only  
```yarn run electron-dev``` - Start the development electron app  

## Deployment
```yarn run build``` - Builds the web app only  
```yarn run electron-pack``` - Build the electron app  

## Resources
[Create Icons](https://favicon.io/favicon-generator/)
