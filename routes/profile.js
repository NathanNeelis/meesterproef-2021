 // Utils
 const getData = require('../utils/getData');
 const calcDefaultGoal = require('../utils/calcDefaultGoal')

 const info = async (req, res) => {
     const dailyPAMURL = 'https://gist.githubusercontent.com/NathanNeelis/f83a294032223066bdddbd5ff37c9dc7/raw/4853849d9da46786b557a131937759bb16218dbc/pam_today'
     const weeklyData = await getData(dailyPAMURL)
     const currentWeek = calcDefaultGoal(weeklyData) // At the moment the PAM average of all the data plus 1

     if (req.session.user) {
         res.render('profile.ejs', {
             user: req.session.user.user,
             currentWeek: currentWeek,
         });
     } else {
         res.render('login.ejs', {
             error: false,
         })
     }
 };

 module.exports = info;