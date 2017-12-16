module.exports = (req, res, next) => {
    var queries = req.query;

    var returnMessage = "Hello " + (queries.name || "NO NAME!!");

    res.status(200);
    res.send(returnMessage);
};