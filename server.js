const compression = require('compression')

const express = require('express');

const helmet = require('helmet')

const app = express();

app.use(compression());

app.use(helmet(PL));




app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

const forceSSL = function() {

  return function (req, res, next) {

    if (req.headers['x-forwarded-proto'] !== 'https') {

      return res.redirect(

       ['https://', req.get('Host'), req.url].join('')

      );

    }

    next();

  }

}

// app.use(function (req, res, next) {

//   res.setHeader(

//     'Content-Security-Policy',

//     "default-src 'self' https://pro.fontawesome.com https://fonts.gstatic.com https://fonts.googleapis.com ; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self' https://pro.fontawesome.com https://fonts.gstatic.com https://fonts.googleapis.com; frame-src 'self'; connect-src 'self' https://o195413.ingest.sentry.io https://xaccounts-test-api.herokuapp.com "

//   );

//   next();

// });

// app.use(forceSSL());

const path = require('path');

app.get('/*', function(req, res) {

  res.sendFile(path.join(__dirname + '/dist/index.html'));

});


