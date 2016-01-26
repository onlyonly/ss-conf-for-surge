const _ = require('underscore');
const fs = require('fs');
const request = require('request-promise');

import {config} from './config';

let ads = Array();
let gfws = Array();

function initialize () {
    return new Promise((resolve, reject) => {
        resolve();
    });
}

function fetchAdlist () {
    return request(config.adlist)
        .then((body) => body);
}

function parseAdlist (body) {
    body.split('\n').forEach(line => {
        line = line.trim();

        if (line.endsWith("REJECT")) {
            ads.push(line);
        }
    });
}

function fetchGfwList () {
    return request(config.gfwlist)
        .then((body) => body);
}

function parseGfwlist (body) {
    body.split('\n').forEach(line => {
        line = line.trim();

        if (!line.startsWith('//')) {
            gfws.push(line);
        }
    });
}

function readTemplate () {
    return new Promise((resolve, reject) => {
        fs.readFile(config.template, 'utf-8', (err, body) => {
            if (err) {
                console.log(err);
                return reject(err);
            }

            resolve(body);
        });
    });
}

function generateConfiguration (body) {
    config.servers.forEach(ss => {
        let content = body;

        content = content.replace('__SERVER__', ss.server);
        content = content.replace('__PORT__', ss.server_port);
        content = content.replace('__METHOD__', ss.method);
        content = content.replace('__PASSWORD__', ss.password);

        content = content.replace('__ADBLOCK__', ads.join('\n'));
        content = content.replace('__GFWLIST__', gfws.join('\n'));

        fs.writeFile(config.output_dir + ss.remarks + '.conf', content, 'utf-8', err => {
            if (err) {
                console.log(err);
                reject(err);
            }
        });
    });
}


initialize()
    .then(fetchAdlist)
    .then(parseAdlist)
    .then(fetchGfwList)
    .then(parseGfwlist)
    .then(readTemplate)
    .then(generateConfiguration)
    .catch((err) => {
        console.log(err);
    });
