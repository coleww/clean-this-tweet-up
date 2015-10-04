var tap = require('tap')

var cleanTweet = require('./')

tap.test('does the thing', function (t) {
  t.plan(1)
  var tweet = {
    text: '. @colewillsea what is up #blazing one down on https://twitter.com/ call 111-123-1234 or drugs@example.com at 123 blaze dubs lane ',
    entities: {
      urls: [
        {
          url: 'https://twitter.com/'
        }
      ]
    }
  }
  t.equal(cleanTweet(tweet), '. what is up blazing one down on call or at', 'does it')
})
