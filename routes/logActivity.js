const logActivity = (req, res) => {
    if (req.session.user) {
        // const user = req.session.user.user
        const activity = req.params.activity

        res.render('active_activity.ejs', {
            activity: activity
        });
    } else {
        res.render('login.ejs', {
            error: false,
        })
    }
};

module.exports = logActivity;