//BinaryGap - find longest sequence of zeros in binary representation of an integer

function solution(num)
{
    var number = num;
    var binary = '';
    var counter = -1;
    var max = 0;

    while(number>0)
    {
        var digit = number%2;

        if (digit === 1)
        {
            if(counter>max)
            {
                max = counter;
            }
            counter = 0;
        }
        else if (counter>= 0)
        {
            counter++;
        }
        binary = '' + digit + binary;
        number = parseInt(number/2);
    }
    return max;
}

solution(9);
