const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");

const keys = require("./config/keys");
const { PORT, DATABASE_URL } = require("./config/config");
const { User } = require("./models/user");
const { Passport } = require("./services/passport");

const app = express();

app.use(
  cookieSession({
    //30 days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const runServer = (port = PORT) => {
  const server = app
    .listen(port, () => {
      mongoose.connect(DATABASE_URL);
      console.info(`App listening on port ${server.address().port}`);
    })
    .on("error", err => {
      console.error("Express failed to start");
      console.error(err);
    });
};

if (require.main === module) {
  runServer();
}
