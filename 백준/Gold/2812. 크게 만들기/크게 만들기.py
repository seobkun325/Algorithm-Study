n, cnt = map(int,input().split(' '))
arr = list(map(int, input().strip()))

stack = []
for i in range(len(arr)) : 
    new = arr[i]
    if stack :
        while stack and stack[-1] < new and cnt>0 :
            stack.pop()
            cnt -= 1
        stack.append(new)
    else :
        stack.append(new)
for i in range(len(stack) - cnt) :
    print(stack[i],end="")
