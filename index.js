function newArray(eachCollection) {
    let values;
    if (!Array.isArray(eachCollection)) {
        values = (Object.values(eachCollection));
    }
    else {
        values = eachCollection;
    }
    return values;
}

function myEach(collection, callback) {
    let values = newArray(collection);
    for (let i = 0; i < values.length; i++) {
        callback(values[i]);
    }
    return collection;
}

function myMap(collection, callback) {
    let array = [];
    let mapArray = newArray(collection);
    mapArray.forEach((element) => array.push(callback(element)));
    return array;
}

function myReduce(collection, callback, acc) {
    let values = newArray(collection);
    let result;
    let i;
    if (acc === undefined) {
        result = values[0];
        i = 1;
    }
    else {
        result = acc;
        i = 0;
    }
    for (i; i < values.length; i++) {
        result = callback(result, values[i], values);
    }
    return result;
}

function myFind(collection, predicate) {
    let values = newArray(collection);
    let predicateValues;
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i]) === true) {
            predicateValues = values[i];
            break;
        }
    }
    return predicateValues;
}

function myFilter(collection, predicate) {
    let values = newArray(collection);
    let trueArray = [];
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i]) === true) {
            trueArray.push(values[i]);
        }
    }
    return trueArray;
}

function mySize(collection) {
    return newArray(collection).length;
}

function myFirst(arr, n) {
    if (n === undefined) {
        return arr[0];
    }
    return arr.slice(0, n);;
}
function myLast(arr, n) {
    if (n === undefined) {
        return arr[arr.length -1]
    }
    return arr.slice(-n);
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}


