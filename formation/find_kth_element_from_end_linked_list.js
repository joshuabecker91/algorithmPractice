
class Node {
    constructor(val = 0, next = null) {
        this.val = val
        this.next = next
    }
}


function kthFromLast(head, k) {
    let n = 0
    let current = head

    while(current){
        n++
        current = current.next
    }
    // console.log("n", n, current)
    let current2 = head
    let i = 0
    if(k > n){
        return -1
    }
    while(current2){
        // console.log(current2.val)
        if(i >= (n - k)){
            return current2.val
        }
        current2 = current2.next
        i++
    }
    return -1
}

var LL1 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(kthFromLast(LL1, 5)) // 2
console.log(kthFromLast(LL1, 0)) // -1
console.log(kthFromLast(LL1, 2)) // 5
console.log(kthFromLast(LL1, )) // -1
console.log(kthFromLast(LL1, 6)) // 1