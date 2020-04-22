function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var agg = 0;
    
    for(var i=0; i<A.length; i++) {
        agg =  agg ^ A[i];
    }
    
    return agg;
}

solution([2, 3, 3, 1, 2, 9, 9])