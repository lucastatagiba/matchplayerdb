const auth = require("json-server-auth");

const rules = auth.rewriter({
  users: 644,
  posts: 644,
});

module.exports = rules;
