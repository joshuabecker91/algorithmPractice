

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


var middleNode = function(head) {
    let count = 1
    let runner = head
    if(head != null){
        console.log(count, runner.val)
        while(runner.next != null){
            runner = runner.next
            count++
            console.log(count, runner.val)
        }
    }
    let middle = Math.floor(count/2)

    let runner2 = head
    while(middle > 0 && runner2.next != null){
        runner2 = runner2.next
        middle -= 1
    }
    return runner2
};