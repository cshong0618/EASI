module.exports = (req, res, next) => {
    var params = req.params;

    var returnMessage = "Hello " + (params.name || "NO NAME!!");

    res.status(200);
    res.send(returnMessage);
};