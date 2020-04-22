function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
  
    var lgt =  Math.max.apply(Math, A);
    
    var lgtA = A.length;
    

    if (lgt !== lgtA)
    {
        return 0;
    }
    else
    {
        return 1;
    }
}
