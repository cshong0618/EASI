var _ = require('lodash');
var fs = require('fs');
var express = require('express');
var jsyaml = require('js-yaml');
var bodyParser = require('body-parser');
var config = require('config');

var app = express();

// Configs
var specPath = process.env.SPEC_PATH || config.get("apiSpecPath");
var controllerPath = __dirname + "/" + (process.env.CONTROLLER_PATH || config.get("controllerPath"));
var PORT = process.env.PORT || config.get("server.port");

var spec = jsyaml.load(fs.readFileSync(__dirname + specPath));

var router = express.Router();

// Load controllers into memory
var files = fs.readdirSync(controllerPath);
var controllers = {};

_.forEach(files, (fileName) => {
    controllers[fileName.replace(".js", "")] = require(controllerPath + "/" + fileName);
})

// Generate topology here
var paths = spec.path;
var requestMethods = ['get', 'post', 'delete', 'put', 'patch'];

// Route path to controller
_.forEach(paths, (routeBody, route) => {
    var processedRoute = route.split("{").join(":").split("}").join("");
    _.forEach(_.pick(routeBody, requestMethods), (methodBody, method) => {
        router[method](processedRoute, controllers[methodBody.controller]);
    });
});

app.use(bodyParser.json());
app.use(spec.basePath, router);

app.listen(PORT, () => {
    console.log("Listening on PORT: " + PORT);
});

