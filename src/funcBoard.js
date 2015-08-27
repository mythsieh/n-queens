 var makeBoard = function(num){
    var theBoard ={}; 
    theBoard.size = num;
    theBoard.rowArray = []; 
    theBoard.majorArray = []; 
    theBoard.minorArray = []; 
    theBoard.count = 0; 
    for(var i = 0; i < num; i++){
      theBoard.rowArray.push(i);
      theBoard.majorArray.push(false);
      theBoard.minorArray.push(false);  
    } 
    theBoard.findRook = function(){
      var results = []; 
      var storage = []; 
      var recurseRook = function(cols, rows, colI, majorArray, minorArray){
        if(rows.length === 0){
          results.push(storage.slice()); 
        }
        for(var i = 0; i < rows.length; i++){
          storage.push([cols[colI], rows[i]]); 
          var rowsCopy = rows.slice(); 
          rowsCopy.splice(i,1);
          recurseRook(cols, rowsCopy, colI + 1); 
          storage.pop(); 
        }
      };
      recurseRook(theBoard.colArray, theBoard.rowArray, 0); 
      return results; 
    };

    theBoard.findQueens = function(){
      var results = []; 
      var storage = []; 
      theBoard.count = 0; 
      var recurseQueen = function(rows, colI, majorArray, minorArray){
        if(rows.length === 0){
          results.push(storage.slice()); 
        }
        for(var i = 0; i < rows.length; i++){
          theBoard.count ++; 
          if(!majorArray[rows[i] + colI] && !minorArray[rows[i] - colI + theBoard.size -1]){
            storage.push([colI, rows[i]]); 
            var rowsCopy = rows.slice();
            var majorCopy = majorArray.slice(); 
            var minorCopy = minorArray.slice();  
            minorCopy[rows[i] - colI + theBoard.size -1] = true; 
            majorCopy[rows[i] + colI] = true; 
            rowsCopy.splice(i,1);
            recurseQueen(rowsCopy, colI + 1,majorCopy,minorCopy);  
            storage.pop(); 
          }
        }
      };
      recurseQueen(theBoard.rowArray,0, theBoard.majorArray, theBoard.minorArray); 
      console.log(theBoard.count); 
      return results; 
      };
    return theBoard;
  };
  var funcBoard = makeBoard(13); 
  //console.log(funcBoard.findQueens()); 
  console.log(funcBoard.findQueens().length); 