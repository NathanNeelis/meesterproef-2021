const info = (req, res) => {
    if (req.session.user) {
        res.render('profile.ejs', {
            user: req.session.user.user
        });
    } else {
        res.render('login.ejs', {
            error: false,
        })
    }
};

module.exports = info;