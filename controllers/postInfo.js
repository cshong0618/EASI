module.exports = (req, res, next) => {
    var body = req.body;
    
    res.status(200);
    res.send(JSON.stringify(body));
};