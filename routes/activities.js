// export
async function activities(req, res) {

    renderPage()

    function renderPage() {
        if (req.session.user) {
            const user = req.session.user.user

            res.render("activities.ejs", {
                user: user
            });
        } else {
            res.render("activities.ejs", {

            });
        }

    }

}


module.exports = activities;