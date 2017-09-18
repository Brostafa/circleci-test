module.exports = {
  'Demo test Google': browser => {
    browser
      .url('https://www.google.com', () => {
        console.log('done')
      })
      .pause(1000)
      .end()
  }
};
