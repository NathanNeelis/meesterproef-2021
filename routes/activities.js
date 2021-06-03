const getDates = require('../utils/dataNextWeek')

// export
async function activities(req, res) {
    const comingWeek = getDates()

    renderPage()

    function renderPage() {
        if (req.session.user) {
            res.render("activities.ejs", {
                user: req.session.user.user,
                dates: comingWeek
            });
        } else {
            res.render("activities.ejs");
        }
    }
}


module.exports = activities;