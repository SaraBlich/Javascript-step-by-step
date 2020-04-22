function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var ret;
    for (var i = 0; i<A.length; i++)
    {
        ret = ret ^ A[i]
        
    }
    return ret;
}
