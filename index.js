module.exports = function (tweet) {
  var text = tweet.text.replace(/@\w+/g, '').replace(/#/g, '') // remove usernames and hashtags
  tweet.entities.urls.forEach(function (url) {
    text = text.replace(url.url, '') // remove all urls
  })
  return text.replace(/\s+/g, ' ').replace(/^\s|\s$/g, '') // remove excess whitespace
}
