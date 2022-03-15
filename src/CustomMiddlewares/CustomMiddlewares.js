const errors = require("../errors/errors");

class CustomMiddlewares {
  static signup(req, res, next) {
    if ("name" in req.body && "birthDate" in req.body) {
      next();
    } else {
      res.status(400).jsonp(errors.signup);
    }
  }

  static todos(req, res, next) {
    if (req.method === "POST") {
      if ("title" in req.body && "description" in req.body) {
        req.body.createdAt = new Date().toUTCString();

        req.body.completed = false;

        next();
      } else {
        res.status(400).jsonp(errors.todos.post);
      }
    } else if (req.method === "PATCH") {
      if ("id" in req.body || "userId" in req.body || "createdAt" in req.body) {
        res.status(400).jsonp(errors.todos.patch);
      } else {
        next();
      }
    } else {
      next();
    }
  }
}

module.exports = CustomMiddlewares;
