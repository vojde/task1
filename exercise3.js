const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

function arrayClone(arr) {
    return arr.slice(0);
};

const arr1 = arrayClone(vegetables);

document.writeln(arr1);
