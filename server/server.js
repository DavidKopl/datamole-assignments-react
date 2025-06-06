const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.post("/items/:id/markDone", (req, res) => {
    const id = Number(req.params.id);
    const db = router.db; // Lowdb instance

    const item = db.get("items").find({ id }).value();

    if (!item) {
        return res.status(404).json({ message: "Item not found" });
    }

    const updatedItem = {
        ...item,
        isDone: true,
        finishedAt: Date.now(),
    };

    db.get("items").find({ id }).assign(updatedItem).write();

    res.json(updatedItem);
});

server.use((req, res, next) => {
    if (req.method === "POST") {
        req.body.createdAt = Date.now();
    }
    next();
});
// Use default router
server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});
