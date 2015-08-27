console.log("loaded our board"); 
var makeOurBoard = function(n){ 
  // make obj
  var obj = {};
  // make arrays
  obj['majorDiagonals'] = [];
  obj['minorDiagonals'] = [];
  obj['rows'] = [];
  // rows will have 0 - n pushed to it, non inclusive
  for (var i = 0; i < n; i++){
    obj['rows'].push(i);
  }
  // findN Rooks Solution
  obj['findNRooks'] = function(){
    // final array that gets returned
    var results = [];
    // storage for what we currently have
    var storage = [];
    // now define recursive function call
    var comboBreaker = function(rowsArray, colIndex){
      // base case, if rowsArray is empty
      if (rowsArray.length === 0){
        // push a copy of storage into results
        results.push(storage.slice());
      }
      // loop over rowsArray
      for (var j = 0; j < rowsArray.length; j++){
        // push current row and column into storage this is the current spot picked
        storage.push([rowsArray[j], colIndex]);
        // remove the jth element from a copy of the array
        var copyRowsArray = rowsArray.slice();
        copyRowsArray.splice(j, 1);
        // recursive call picks the next spot
        comboBreaker(copyRowsArray, colIndex + 1);
        storage.pop();
      }
    };
    // initiate comboBreaker
    comboBreaker(obj['rows'], 0);
    // results is an array of all solutions
    return results;
  };

  // findN Queens 
  obj['findNQueens'] = function(){
    // final array that gets returned
    var results = [];
    // storage for what we currently have
    var storage = [];
    // now define recursive function call
    var comboBreaker = function(rowsArray, colIndex, majorDiagonalsArray, minorDiagonalsArray){
      // base case, if rowsArray is empty
      if (rowsArray.length === 0){
        // push a copy of storage into results
        results.push(storage.slice());
      }
      // loop over rowsArray
      for (var j = 0; j < rowsArray.length; j++){
        //major index = r + c
        var majorIndex = rowsArray[j] + colIndex;
        //minor index = r - c + size - 1
        var minorIndex = rowsArray[j] - colIndex + obj['rows'].length - 1; 
        // if this is not a previously existing major diagonal AND if this is not a previously existing minor diagonal
        if (!(majorDiagonalsArray[majorIndex]) && !(minorDiagonalsArray[minorIndex])) {
          // mark the major and minor as taken, but on copies
          var copyOfMajor = majorDiagonalsArray.slice();
          copyOfMajor[majorIndex] = true;
          var copyOfMinor = minorDiagonalsArray.slice();
          copyOfMinor[minorIndex] = true;
          // push current row and column into storage, this is the current spot picked
          storage.push([rowsArray[j], colIndex]);
          // remove the jth element from a copy of the array
          var copyRowsArray = rowsArray.slice();
          copyRowsArray.splice(j, 1);
          // recursive call picks the next spot
          comboBreaker(copyRowsArray, colIndex + 1, copyOfMajor, copyOfMinor);
          storage.pop(); 
        } 
      }
    };
    // initiate comboBreaker
    comboBreaker(obj['rows'], 0, obj['majorDiagonals'], obj['minorDiagonals']);
    // results is an array of all solutions
    return results;
  };
  // return obj
  return obj;
};
var boardTest = makeOurBoard(); 
console.log(boardTest.findNRooks().length);  
console.log(boardTest.findNQueens().length);







//------------------------------------------------
// LEARNING EXPERIENCES BELOW HERE















//our Board previous
  // this.size = 0; 
  // for (var key in obj){
  //   this.size = obj[key];
  // }
  // this.columnsArray = [];
  // this.rowsArray = [];
  // for (var i = 0; i < this.size; i++){
  //   this.columnsArray.push(i);
  //   this.rowsArray.push(i);
  // }
  // this.results = []; 
// var rps = function(rounds){
//     rounds = rounds||3
//     var outcomes = [];
//     var playedSoFar = [];
//     var plays = ['rock', 'paper', 'scissors'];
    
//     var combos = function(roundsToGo){
//         if (roundsToGo === 0){
//             outcomes.push(playedSoFar.slice());
//             return;
//         }
//         for (var i = 0; i < plays.length; i++){
//             playedSoFar.push(plays[i]);
//             combos(roundsToGo-1);
//             playedSoFar.pop();
//         }
//     }
//     combos(rounds);
//     return outcomes;
// }

// OurBoard.prototype.findNRooksSolution = function(){
//   // 
// };

// OurBoard.prototype.countNRooksSolutions = function(){
// };
// OurBoard.prototype.findNQueensSolution = function(){
  
// };
// OurBoard.prototype.countNQueensSolutions = function(){

// };
//colusreFunction(columnsArrayslice, rowsArray.slice)

  //closure function
  //if countNsolutios - return count
  //findNSolutions return storage

///////////////////////////////////////////
// findNRooks

  // spot has been picked [2, 3, 4] [2, 3, 4] ==> [3, 3] [4, 4] [ 3, 4] [ 4, 3]
  // make a copy of this board's rows array
  // make a copy of this board's cols array
    // eliminate ROW out of the row copy array
    // eliminate COL out of the col copy array
  // now we have all valid spot combinations
  // create all valid spot combinations here
  // return an array of all possible combination for COL, ROW

// countNRooks
  // counter variable
  // loop through rows
    //loop through columns
      // var result =  findNRooksSolution(row[i], [colj])
      // loop through result
        // for each combination in result array
        // increment counter
  // return counter

  //findNRooks
      //storage = storage || []
    // storage = storage || [];
    // colArray = colArray || this.columnsArray.slice();
    // rowArray = rowArray || this.rowsArray.slice();
    //    //loop through colArray -  c
    // for (var i = 0; i < colArray.length; i++){ 
    //   // while(colArray.length > 0){
    //   //loop through rowArray - r 
    //   for (var j = 0; j < rowArray.length; j++){
    //     //console.log (i + " | " + j); 
    //     //make tuple 
    //     var tuple = [];
    //     //copy colArray 
    //     var copyColArray = colArray.slice();
    //     // then remove i and push into tuple
    //     tuple.push(copyColArray.splice(i,1)[0]);
    //     //copy rowArray
    //     var copyRowArray = rowArray.slice();
    //     // then remove j and push into tuple
    //     tuple.push(copyRowArray.splice(j,1)[0]);
    //     // push [i,j] into storage 
    //     storage.push(tuple);
    //     //if storage.length === n   
    //     if (storage.length === this.size) {
    //       this.results.push(storage); 
    //       //return storage;  
    //     } else {
    //       //console.log(copyColArray.length, copyRowArray.length); 
    //       this.findNRooksSolution(copyColArray, copyRowArray, storage.slice());
    //       //console.log(result);
    //       //return result;
    //     } 
    //   }
    //   //--remove finished colArrray item
    //   // colArray.splice(0,1); 
    //   //console.log(colArray); 
    // }


  // var board = new OurBoard({n: 2});
  // //console.log(board);
  // //console.log(board.findNRooksSolution());
  // board.findNRooksSolution();
  // //console.log(board.results);  
  // window.holder = [];
  // //console.log("starting test"); 
  // var theTest = function(temp, num){ 
  //   temp = temp || []; 
  //   //console.log(num); 
  //   for(var i = 0; i < num; i++){
  //     for(var j = 0; j < num; j++){
  //       temp.push ([i,j]);
  //       if(temp.length >= 3){ 
  //         window.holder.push(temp); 
  //       }
  //       else{
  //         theTest(temp.slice(), num--); 
  //       } 
  //     }
  //   }
  // };
  // theTest(null, 3);