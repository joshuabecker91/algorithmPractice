

class Node:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next 

head = Node(5,
            Node(10,
                Node(15,
                    Node(20,
                        Node(25)))))

cur = head
while cur:
    print(cur.val)
    cur = cur.next

print("All Done")



# Alternative - This will stop the loop one before the end
# So that you can capture the last value and do something with it
cur = head
while cur.next:
    print(cur.next)
    cur = cur.next 
if cur != None:
    print("Not done yet:", cur.val)