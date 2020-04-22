function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    res = [];
    if(A.length === 0) return 'Add a tab';
    if(A.length ===1 || ((K===1) || (K === 0)) ) return A;
    for (var i =0; i< A.length; i++)
    {
        var newPos = (i+K) % A.length
        res[newPos] = A[i];
    }
    return res;
}
