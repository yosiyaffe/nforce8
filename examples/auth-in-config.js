let nforce = require('../');
let sfuser = process.env.SFUSER;
let sfpass = process.env.SFPASS;
let org = nforce.createConnection({
  clientId:
    '3MVG9rFJvQRVOvk5nd6A4swCyck.4BFLnjFuASqNZmmxzpQSFWSTe6lWQxtF3L5soyVLfjV3yBKkjcePAsPzi',
  clientSecret: '9154137956044345875',
  redirectUri: 'http://localhost:3000/oauth/_callback',
  mode: 'single',
  username: sfuser,
  password: sfpass
});
org.authenticate().then(
  function (res) {
    console.log('authenticated! token=' + res.access_token.substr(0, 5));
  },
  function (err) {
    console.error('failed');
    console.error(err);
  }
);
