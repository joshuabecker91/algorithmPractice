

function toString(head) {
    if (!head)
        return "<empty>"

    let parts = []
    while (head) {
        parts.push(head.val)
        head = head.next
    }
    return parts.join(" -> ")
}

class SLLNode {
    constructor(val = 0, next = null){
        this.val = val
        this.next = next
    }
}

function solution(head) {
    if(!head){
        return head
    }
    let current = head
    let temp = new SLLNode()
    while(current){
        if(current.next){
            temp = current.next
            current.next = new SLLNode(0)
            current = current.next
            current.next = temp
        } 
        current = current.next
        console.log("loop")
        if(!current.next){
            console.log("end of list, adding last zero")
            current.next = new SLLNode(0)
            return head
        }
    }
    return head
}

console.log(toString(solution(new SLLNode(1, new SLLNode(2, new SLLNode(3))))))

console.log(toString(solution(new SLLNode(1, new SLLNode(2, new SLLNode(3, new SLLNode(4)))))))

