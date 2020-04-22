function solution(A) {
    var counter = 0;
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort(function(a, b){
        return a - b;
    });
    
    if(A.length === 1)
    {
        return A;
    }
    for (var i = 0; i<A.length;i++)
    {
        if((A[i] !== A[i-1])) counter++;
    }
    return counter;
    
}
