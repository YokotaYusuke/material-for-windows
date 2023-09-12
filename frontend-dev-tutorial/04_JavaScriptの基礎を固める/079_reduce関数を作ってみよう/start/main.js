const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
    return `${accu}<${curr}>`;
}

function reduce(strArry, callBack, defalutValue) {
    let accu = defalutValue;
    for(const ele of strArry) {
        accu = callBack(accu, ele);
    }
    return accu;
}

const result = reduce(strArry, tag, "");
console.log(result);