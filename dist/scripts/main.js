
    // _.object

var ironYard = ["Tim","Wendy","Richard", "Chelsea", "Emory", "Victoria", "John", "Joanna","Max"];
var age = ["30yrs", "25yrs", "24yrs", "23yrs", "22yrs", "31yrs", "29yrs", "35yrs", "27yrs"];
var wendy=[];

wendy.object = function( ironYard, age) {
    if (ironYard == null) return {};
    var result = {};
    for (var i = 0, length = ironYard.length; i < length; i++) {
      if (age) {
        result[ironYard[i]] = age[i];
      }

      else {
        result[ironYard[i][0]] = ironYard[i][1];
      }
    }
    return result;
  };

  var w= wendy.object(ironYard,age);

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
