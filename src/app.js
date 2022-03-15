const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const router = require("./router/router");
const rules = require("./rules/rules");
const CustomMiddlewares = require("./CustomMiddlewares/CustomMiddlewares");

const app = jsonServer.create();

app.db = router.db;

app.use(jsonServer.bodyParser);

app.use(cors());

app.use("/users", CustomMiddlewares.register);
app.use("/posts", CustomMiddlewares.posts);

app.use(rules);
app.use(auth);
app.use(router);

module.exports = app;
