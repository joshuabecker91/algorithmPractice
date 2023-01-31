

class Node:
    def __init__(self, val = 0, next = None): 
        self.val = val
        self.next = next


def sumLinkedList(head: Node) -> int:
    current = head
    sum = 0
    while current:
        sum += current.val
        # print(current.val, sum)
        current = current.next
    return sum


# Test Cases
LL1 = Node(1, Node(4, Node(5)))
print(sumLinkedList(LL1)) # 10
print(sumLinkedList(None)) # 0
print(sumLinkedList(Node(1))) # 1
print(sumLinkedList(Node(80, Node(40, Node(80, Node(5)))))) # 205