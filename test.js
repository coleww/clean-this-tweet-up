var tap = require('tap')

var cleanTweet = require('./')

tap.test('does the thing', function (t) {
  t.plan(1)
  var tweet = {
    text: '. @colewillsea what is up #blazing one down on https://twitter.com/',
    entities: {
      urls: [
        {
          url: 'https://twitter.com/'
        }
      ]
    }
  }
  t.equal(cleanTweet(tweet), '. what is up blazing one down on', 'does it')
})
