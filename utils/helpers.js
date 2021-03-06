module.exports = {
  checkAuth: (req, res, next) => {
    // If the user isn't logged in, redirect them to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  },
    //time helper
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/
        ${new Date(date).getDate()}/
        ${new Date(date).getFullYear()}`;
      },

}







