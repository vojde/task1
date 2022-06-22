const arr = ["php", "php", "css", "css",
    "script", "script", "html", "html", "java"
];
function removeDuplicates(arr) {
    let obj = {};
    let out = [];
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        obj[str] = true;
    };
    for (i in obj) {
        out.push(i);
    };
    return out;
};

result = removeDuplicates(arr);
document.writeln(result);