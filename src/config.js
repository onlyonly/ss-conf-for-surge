const path = require('path');

const config = {
    'adlist': 'https://gist.githubusercontent.com/iyee/2e27c124af2f7a4f0d5a/raw/7758f00988cb817b9d5d589e548d804fa61adc51/main.conf',
    'gfwlist': 'https://raw.githubusercontent.com/R0uter/ss.conf-for-surge/master/gfwlist.txt',

    'template': path.join(__dirname, '..', 'template.conf'),
    'output_dir': path.join(__dirname, '..', 'conf/'),

    // your ss info here
    servers: [
        {
            "server":"127.0.0.1",
            "server_port":"8080",
            "local_port":"1080",
            "password":"password",
            "method":"rc4-md5",
            "remarks":"hk-ss"
        }
    ]
};

export {config};
