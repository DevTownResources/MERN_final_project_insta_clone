#!/bin/bash
#Stopping existing node servers
echo "Stopping any existing servers"

# #add npm and node to path
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

node --version
nvm --version
echo "loaded nvm"


pkill node
/home/ec2-user/.nvm/versions/node/v17.4.0/bin/pm2 kill
echo "Stopped the file"