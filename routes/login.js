const login = (req, res) => {
    res.render('login.ejs', {
        error: false,
    });
};

module.exports = login;