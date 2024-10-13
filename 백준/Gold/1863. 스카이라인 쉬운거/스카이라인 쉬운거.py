n = int(input())
stack = []
a = []
b = []
count = 0
while n>0 :
    new= list(map(int, input().split()))
    n -= 1
    a.append(new[0])
    b.append(new[1])
b.append(0)
stack.append(0)
for i in range(len(b)) :
    height = b[i]
    while stack[-1] > b[i] :
        if stack[-1] != height :
            count += 1
            height = stack[-1]
        stack.pop()
    stack.append(b[i])
print(count)