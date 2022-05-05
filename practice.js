// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
var results = 0;

  _.each(numbers, function(number) {
    if(number % 5 === 0){

      results++;
    };
    });

  return results;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var result = _.filter(fruits, function(fruit){
    return fruit === targetFruit;
  })
  return result;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var result = _.filter(fruits, function(fruit){
    return fruit[0] == letter;
  })
  return result;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var result = _.filter(desserts, function(dessert){
    return dessert['type'] == 'cookie';
  })
  return result;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var result = _.reduce(products, function(memo, product){

    return memo + parseFloat(product['price'].slice(1));
  },0.0)
  return result;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var result = _.reduce(desserts, function(list, item){

    itemType = item['type'];
    list[itemType] = (list[itemType] || 0) + 1;

    return list;
  }, {})


  return result;


};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  // Input: array of movie data objects with keys title and releaseYear
  // Output: array of titles
  // Constraints: use array as accumulator, don't push to ext array.
  // Use _.reduce, do not use native .reduce
  // Edge case: none
  // Example object in array:
  // {
  //   title: 'Back to the Future',
  //   releaseYear: 1985,
  //   rating: 8.5,
  //   genre: ['Adventure', 'Comedy', 'Sci-fi'],
  //   runtime: 116
  // },

  // I will try this without the constraint
  var accumulator = [];
  var result = _.reduce(movies, function(memo, item){

    if(item['releaseYear'] >= 1990 && item['releaseYear'] <= 2000 ){
      // console.log("title found! " + item['title'] + ' ' + item['releaseYear']);
      // initialize memo as array if none and add object
      if (!accumulator){
        accumulator = [];
        accumulator.push(item['title']);
        // console.log("memo length is " + accumulator.length);
      } else {
        accumulator.push(item['title']);
        // console.log("memo length is " + accumulator.length);
      }
    }

  }, accumulator);
  // console.log(accumulator)
  return accumulator;
};


// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
// Input: collection of movies with an integer movie.runtime, and a timeLimit
// Output: boolean
// Constraints: should use underscore reduce
// Edge cases: none
// init boolean: unclear if I need this
// Strategy: reduce to number where > 1 means true

// Lessons Learned:
// 1. Memo here defaults to an item in the collection, but if you initialize it as anything else you can make accumnulator
// 2. you can return result without naming it.
return _.reduce(movies, function(memo, item){
  return item['runtime'] < timeLimit ? true : memo;
},false)


// result = _.reduce(movies, function(memo, item){
//   return item['runtime'] < timeLimit ? true : memo;
// },false)
// return result;
};



/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(fruit){ return fruit.toUpperCase();
  })
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
// Input: array of desserts
// Output: array of same objects but with property "glutenFree" set as true or false
// Constraints: use _.map; return new array
// Edge case: flour is not gluten free
  return _.map(desserts, function(item){
    // if item has flour in ingredients, glutenFree = false
    if(_.contains(item['ingredients'], 'flour')){
      //console.log("flour found in " + item.name);
      item['glutenFree'] = false;
    } else {
      item['glutenFree'] = true;
    };
    return item;
  })

};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
// input: array of groceries, and a coupon
// output: new array of items with salePrice value added
// constraints: use _.map;
// edge cases: because of weirdness in JS decimals, must convert to integer of pennies b4 changing number
  return _.map(groceries, function(item){
    // take price and convert into pennies
    console.log("original price" + item['price']);
    console.log("price in pennies: " +  parseInt(item.price.slice(1) * 100) );
    var salePennies = parseInt(item.price.slice(1) * 100) * (1 - coupon);
    console.log("sale in pennies: " + salePennies);
    item['salePrice'] = '$' + (salePennies / 100).toFixed(2);
    console.log(item['salePrice'])
    // then create sale price as string with $
    return item;
  })


};
