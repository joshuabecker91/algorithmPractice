

class Snapshot {
    constructor(array) {
        this.stored = Array.from(array);
        this.array = array;
    }

    restore() {
        return this.stored.slice(0,3);
    }
}

var array = [1, 2];
console.log(array);
var snap = new Snapshot(array);
array[0] = 3;
console.log(array);
array = snap.restore();
console.log(array);


console.log(array.join()); //It should log "1,2"
array.push(4);
array = snap.restore();
console.log(array.join()); //It should log "1,2"


