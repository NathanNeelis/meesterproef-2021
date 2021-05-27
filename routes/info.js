const info = (req, res) => {
    if (req.session.user) {
        const user = req.session.user.user

        res.render('info.ejs', {
            user: user
        });
    } else {
        res.render('login.ejs', {
            error: false,
        })
    }
};

module.exports = info;