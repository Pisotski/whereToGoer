const yelp = require('yelp-fusion');
const { yelpCredentials } = require('../keys/yelp/config');

const client = yelp.client(yelpCredentials.API_Key);

const restaurantMatch = function (category) {
  return client.search({
    term: category,
    location: 'San Francisco',
    limit: 10,
  })
};

module.exports = { restaurantMatch };
