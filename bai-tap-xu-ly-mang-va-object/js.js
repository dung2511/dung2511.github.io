// Bài 2:
      function longestString(arr) {
        for (let i in arr) {
            let arr1 = arr[i].length;
            let arr2 = arr[i+1].length;
          if (arr1 < arr2) {
            arr.splice(i, 1);
          }
        }
        return arr;
      }
      function longestString(arr) {
        for (let i in arr) {
          let array = [];
          let arrayLength = arr[i].length;
          if (arr[i].length > arrayLength) {
            arrayLength = arr[i].length;
            array.push(arr[i]);
          }
        } return array;
      }

      function longestString(arr){
        let max = arr[0];
        for ( let i in arr){
            if ( max.length < arr[i].length){
                max = arr[i];
            }
        } return max;
    }

