function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    A.sort();
    
    var nowValue = 1;
    var i=0;
    while(nowValue === A[i]) {
        nowValue++;
        i++;
    }
    
    return nowValue;
}
