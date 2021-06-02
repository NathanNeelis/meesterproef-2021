// export
async function activities(req, res) {

    renderPage()

    function renderPage() {
        if (req.session.user) {
            res.render("activities.ejs", {
                user: req.session.user.user
            });
        } else {
            res.render("activities.ejs");
        }
    }
}


module.exports = activities;