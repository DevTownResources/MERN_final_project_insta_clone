#!/bin/bash

#give permission for everything in the api directory
sudo chmod -R 777 /home/ec2-user/MERN_final_project_insta_clone

#navigate into our working directory where we have all our github files
cd /home/ec2-user/MERN_final_project_insta_clone/server

#add npm and node to path
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

npm i -g pm2

#install node modules
npm install

source /home/ec2-user/insta_clone_env.sh

#start our node app in the background
pm2 start index.js --name "insta_clone"

echo "Started the file"