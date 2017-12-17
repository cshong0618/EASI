module.exports = (req, res, next) => {
    res.send("<script>document.write(navigator.userAgent)</script>");
};