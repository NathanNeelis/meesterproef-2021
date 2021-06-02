const logActivity = (req, res) => {
    if (req.session.user) {
        res.render('active_activity.ejs', {
            activity: req.params.activity
        });
    } else {
        res.render('login.ejs', {
            error: false,
        })
    }
};

module.exports = logActivity;