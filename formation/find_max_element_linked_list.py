import math

class Node:
    def __init__(self, val = 0, next = None): 
        self.val = val
        self.next = next

def findMaxLinkedList(head: Node) -> int:
    max = -math.inf # should be negative infinity 
    current = head
    while current:
        if current.val > max:
            max = current.val
        current = current.next
    return max

# Test Cases
LL1 = Node(1, Node(4, Node(5, Node(1))))
LL2 = Node(7, Node(1, Node(5, Node(1))))
LL3 = Node(-1, Node(-3, Node(-5, Node(0, Node(-11)))))
print(findMaxLinkedList(LL1)) # 5
print(findMaxLinkedList(LL2)) # 7
print(findMaxLinkedList(LL3)) # 0
print(findMaxLinkedList(Node(1))) # 1


# More Test Cases
print(findMaxLinkedList(Node(1, Node(2, Node(3, Node(4, Node(5))))))) # 5
print(findMaxLinkedList(None)) # -Infinity (None)
print(findMaxLinkedList(Node(1))) # 1
print(findMaxLinkedList(Node(0))) # 0
print(findMaxLinkedList(Node(100, Node(900)))) # 900