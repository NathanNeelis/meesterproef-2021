const info = (req, res) => {
    if (req.session.user) {
        res.render('info.ejs', {
            user: req.session.user.user
        });
    } else {
        res.render('login.ejs', {
            error: false,
        })
    }
};

module.exports = info;