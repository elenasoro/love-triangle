/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(arr) {
  var count = 0;

  var currentSpichoneePosition;
  var currentSpichoneeLover;
  var currentSpichoneeLoverLoves;
  var currentSpichoneeLoverLoverLoves;

  for (var i = 0; i < arr.length; i++) {
    
      currentSpichoneePosition = i+1;
      currentSpichoneeLover = arr[i];

      currentSpichoneeLoverLoves = arr[currentSpichoneeLover-1];
      currentSpichoneeLoverLoverLoves = arr[arr[currentSpichoneeLover-1]-1];

      if(currentSpichoneeLover == currentSpichoneeLoverLoverLoves) continue;

      if(currentSpichoneeLoverLoverLoves == currentSpichoneePosition){
        count++;
      }
    }

    if(count == 0 ) return count;
    else return count/3;
    };
