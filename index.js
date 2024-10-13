// const { ROUTE } = require("@snipkode/server");

require("@snipkode/server");
//console.log("ini global object", global);

ROUTE("GET /", function () {
  this.view("pages/landingpage");
});

ROUTE("GET /todo", function () {
  this.view("pages/todo");
});

ROUTE("GET /dashboard", function () {
  this.view("pages/dashboard");
});

HTTP("debug", { port: 80 });
