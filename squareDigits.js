function squareDigits(num){

    return parseInt(num.toString().split('').map(c => Math.pow(parseInt(c),2)).join(''));

  }

squareDigits(9119);