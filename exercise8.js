const array1 = [5, 2, 1, -10, 8];
const array2 = [5, 2, 1, -9, 3, 7];

const union = function (array1, array2) {
    let array3 = [];
    let arr = array1.concat(array2);
    let len = arr.length;
    let obj = {};

    while (len--) {
        let itm = arr[len];

        if (!obj[itm]) {
            array3.unshift(itm);
            obj[itm] = true;
        };
    };
    return array3;
};

document.writeln(union(array1, array2));
