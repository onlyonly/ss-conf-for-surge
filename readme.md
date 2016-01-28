Inspired by [ss.conf-for-surge](https://github.com/R0uter/ss.conf-for-surge), written in Node, with ES6 supported.

### install

Clone this repository and run `npm install`.

BTW, my Node version is `5.4.0`.


### run

Fill up your ss info in `src/config.js`, multiple servers are supported. Then save and run:

    mkdir -p conf && npm run build && npm start

Configuration files are generated inside `./conf/`. Just drag them into your Surge App via iTunes.


### todo
- parse gfwlist myself


### credits
- [ss.conf-for-surge](https://github.com/R0uter/ss.conf-for-surge) by R0uter
- [adlist](https://gist.github.com/iyee/2e27c124af2f7a4f0d5a) by iyee


### license
MIT
