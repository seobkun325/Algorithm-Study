import sys
input = sys.stdin.readline
tree = {}
N = int(input())
for i in range(N) :
    root, left, right = input().strip().split()
    tree[root] = [left, right]

def preOrder(root) :
    if root == '.' :
        return
    print(root, end="")
    preOrder(tree[root][0])
    preOrder(tree[root][1])
    return

def inOrder(root) :
    if root == '.' :
        return
    inOrder(tree[root][0])
    print(root, end="")
    inOrder(tree[root][1])
    return

def postOrder(root) :
    if root == '.' :
        return
    postOrder(tree[root][0])
    postOrder(tree[root][1])
    print(root, end="")
    return

preOrder('A')
print()
inOrder('A')
print()
postOrder('A')