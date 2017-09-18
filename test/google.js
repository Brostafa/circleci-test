/* jshint expr: true */
module.exports = {
  tags: ['google'],
  'Demo test Google' : function (client) {
    client
      .url('https://www.google.com')
      .pause(1000);

    client.expect.element('body').to.be.present;
    client.end();
  }
};
