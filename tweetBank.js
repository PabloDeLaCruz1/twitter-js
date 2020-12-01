const _ = require('lodash')

let data = [];

function add(name, content) {
    data.push({
        name: name,
        content: content
    });
}

function list() {
    return _.cloneDeep(data);
}

function find(properties) {
    // Creates a shallow clone of value.
    //This method is like _.clone except that it recursively clones value.
    return _.cloneDeep(_.filter(data, properties));
}

module.exports = {
    add: add,
    list: list,
    find: find
};

//Create random tweets for testing purposes 
const randArrayEl = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  
  const getFakeName = function() {
    const fakeFirsts = ['N', 'D', 'S', 'E', 'S', 'K', 'B', 'D', 'A', 'K', 'O', 'G', 'J', 'G'];
    const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
    return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
  };
  
  const getFakeTweet = function() {
    const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
    return "Learning node is " + randArrayEl(awesome_adj) + "! The documentation is " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
  };
  
  for (let i = 0; i < 10; i++) {
    module.exports.add( getFakeName(), getFakeTweet() );
  }

