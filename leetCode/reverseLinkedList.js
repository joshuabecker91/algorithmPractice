

var reverseList = function(head) {
    let array = []
    let runner = head
    if(!head){
        return head
    }
    while(runner.next != null){
        array.push(runner.val)
        runner = runner.next
    }
    array.push(runner.val)
    let dummy = new ListNode(array.pop())
    let runner2 = dummy
    let count = array.length
    while(count > 0){
        runner2.next = new ListNode(array.pop())
        runner2 = runner2.next
        count--
    }
    return dummy
};



// let reverseList = function(head) {
//     let prev = null, next = null;
//     while (head) {
//         next = head.next
//         head.next = prev;
//         prev = head;
//         head = next;
//     }
//     return prev;
// };



// var reverseList = function(head) {
//     let array = []
//     let runner = head
//     if(!head){
//         return head
//     }
//     while(runner.next != null){
//         // console.log(runner.val)
//         array.push(runner.val)
//         runner = runner.next
//     }
//     array.push(runner.val)
//     // console.log(runner.val)
//     // console.log(array)
//     let dummy = new ListNode(array.pop())
//     let runner2 = dummy
//     let count = array.length
//     while(count > 0){
//         runner2.next = new ListNode(array.pop())
//         runner2 = runner2.next
//         count--
//     }
//     // console.log(dummy)
//     return dummy
// };




// var reverseList = function(head) {
//     let array = []
//     let runner = head
//     if(!head){
//         return head
//     }
//     if(runner){
//         while(runner.next != null){
//             console.log(runner.val)
//             array.push(runner.val)
//             runner = runner.next
//         }
//         array.push(runner.val)
//         console.log(runner.val)
//     }
//     console.log(array)
//     let dummy = new ListNode(array.pop())
//     let runner2 = dummy
//     let count = array.length
//     while(count > 0){
//         runner2.next = new ListNode(array.pop())
//         runner2 = runner2.next
//         count--
//     }
//     console.log(dummy)
//     return dummy
// };