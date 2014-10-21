var array = ["Tim","Wendy","Richard", "Chelsea", "Emory", "Victoria", "John", "Joanna","Max"];
var wendy = {};


wendy.size = function(thing) {
  console.log(thing.length);
};


























    // _.object

var ironYard = ["Tim","Wendy","Richard", "Chelsea", "Emory", "Victoria", "John", "Joanna","Max"];
var age = ["30yrs", "25yrs", "24yrs", "23yrs", "22yrs", "31yrs", "29yrs", "35yrs", "27yrs"];

var root=this;
var wendy=[];

root.wendy = wendy;

wendy.object = function( arr, function) {
    if (arr == null) return {};
    var result = {};
    for (var i = 0, length = arr.length; i < length; i++) {
      if (funct) {
        result[arr[i]] = function[i];
      }

      else {
        result[arr[i][0]] = arr[i][1];
      }
    }
    return result;
  };

  var w= wendy.object(arr,age);

  console.log(w);



    // _.first

var ironYard = ["Tim","Wendy","Richard", "Chelsea", "Emory", "Victoria", "John", "Joanna","Max"];
var wendy=[];
var n=7

wendy.first = function(ironYard, n) {
    if (ironYard == null) return void 0;
    if (n == null) return ironYard[0];
    if (n < 0) return [];
    return Array.prototype.slice.call(ironYard, 0, n);
  };

    console.log(wendy.first(ironYard, n));

    // _.size

var chase = {}

var myArray = [1,2,3,4,5];

chase.size = function (list) {
  return(list.length);
};

chase.size(myArray)
  var w = chase.size(myArray)
  console.log(w);


      // _.range

var start=0;
var stop=20;
var step=5;
var andrew={};

andrew.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

console.log(andrew.range(start,stop, step));




      // CLASS REVIEW


  // setup my main function
  var tim= {};

  var arr = ['Tim', 'Phil', 'Bill'];

    // Function will return a new array
    // Take two parameters
    // 1. an array
    // 2. a callback, function
  tim.map = function (arr, funct) {
    var res = [], i;
    for (i = 0; i < arr.length; i++){
      res[i] = funct(arr[i]);
    }

    return res;
  };




  tim.map = function (arr, funct) {
    if ( Array.isArray(arr) ) {
        if (arr.length > 0) {
          var res = [], i;
          for (i = 0; i < arr.length; i++){
          res[i] = funct(arr[i]);
        }
        return res;
      }
      return [];
    } else {
    return console.log('This is not an array')
  };
