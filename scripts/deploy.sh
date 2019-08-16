#!/bin/bash
git remote set-url --push origin https://denseidel:${GITHUB_TOKEN}@github.com/denseidel/denseidel.github.io.git 
cd website
npm install 
GIT_USER=denseidel CURRENT_BRANCH=source yarn run publish-gh-pages
