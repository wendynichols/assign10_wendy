var arr = ["Tim","Wendy","Richard", "Chelsea", "Emory", "Victoria", "John", "Joanna","Max"];


(function() {

  var wendy = [];
  var root=this;
  root.wendy = wendy;


        // _.first
    wendy.first = function(arr, num) {
      var firstVal = arr[0];
        if (arr == null) return void 0;
        if (num == null) return arr[0];
        if (num < 0) return [];
        return Array.prototype.slice.call(arr, 0, num);
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

    wendy.object = function( arr, listCont) {
        if (arr == null) {
          return {};
        };
        var result = {};
        for (var i = 0, length = arr.length; i < length; i++) {
          if (listCont) {
            result[arr[i]] = listCont[i];
          }

          else {
            result[arr[i][0]] = listCont[i][1];
          }
        }
        return result;
      };



    wendy.now = function(arr) {
      return new Date().getTime();
    };

    wendy.map = function (arr, cont) {
        if ( Array.isArray(arr) ) {
            if (arr.length > 0) {
              var res = [], i;
              for (i = 0; i < arr.length; i++){
              res[i] = cont(arr[i]);
            }
            return res;
          }
          return [];
        } else {
        return console.log('This is not an array')
      };
};
}());
