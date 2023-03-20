# #download node and npm
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# . ~/.nvm/nvm.sh
# nvm install node

# buat directory jika directory tidak ada
DIR="/home/ec2-user/node-aws"

if [-d "$DIR"]; then
    echo "${DIR} exists"
else
    echo "Creating ${DIR} directory"
    mkdir ${DIR}
fi


