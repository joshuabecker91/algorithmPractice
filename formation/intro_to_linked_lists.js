

class Node {
    constructor(val, next=null){
        this.val = val
        this.next = next 
    }
}

let head = 
    new Node(5,
        new Node(10,
            new Node(15,
                new Node(20,
                    new Node(25,)))))

let cur = head
while(cur !== null){
    console.log(cur.val)
    cur = cur.next 
}

console.log("All Done")



// Alternative - This will stop the loop one before the end
// So that you can capture the last value and do something with it
// let cur = head
// while(cur.next !== null){
//     console.log(cur.val)
//     cur = cur.next
// }

// if(cur !== null){
//     console.log("Not done yet:", cur.val)
// }