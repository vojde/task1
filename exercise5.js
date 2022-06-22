const num = prompt('Введите число', 13);

function colonOdd(num) {
    let str = num.toString();
    let result = [str[0]];
    for (let i = 1; i < str.length; i++) {
        if ((str[i - 1] % 2 !== 0) && (str[i] % 2 !== 0)) {
            result.push(':', str[i]);
        }
        else {
            result.push(str[i]);
        }
    }
    return result.join('');
};

document.writeln(colonOdd(num));
