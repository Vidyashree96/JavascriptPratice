var romanToInt = function(s) {
 let add = 0;
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let splitedStr = s.split('').map((x)=> roman[x])
    console.log(splitedStr);
     add= splitedStr.reduce((x,i)=> x+i)
    console.log(add)
}

romanToInt('VIX')