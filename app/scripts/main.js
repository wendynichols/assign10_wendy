var arr = ["Tim","Wendy","Richard", "Chelsea", "Emory", "Victoria", "John", "Joanna","Max"];
var wendy = {};
//var root=this;



    // _.first
wendy.first = function(arr, funct) {
    if (arr == null) return void 0;
    if (funct == null) return arr[0];
    if (funct < 0) return [];
    return Array.prototype.slice.call(arr, 0, funct);
};

    // _.size
wendy.size = function (list) {
  return(list.length);
};

    // _.random
wendy.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min+Math.floor(Math.random() * (max - min + 1));
};

    // _.equal
wendy.equal= function(a,b){
if (a===b) return true;
else{
  return false;
}
};

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



wendy.now = function(arr) {
  return new Date().getTime();
};

wendy.map = function (arr, funct) {
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
