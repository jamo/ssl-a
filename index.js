const { send } = require('micro');

module.exports = async function (req, res) {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000;');
  send(res, 200, {'hello': 'ssl-a+'});
}
