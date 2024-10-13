count = 1
temp = True
stack = []
op = []

n = int(input())
for i in range(n) : 
    new = int(input())
    # 입력받은 숫자까지 스택에 박음
    while count <= new :
        stack.append(count)
        op.append('+')
        count += 1
    # 입력받은 숫자가 스택 최상단과 같다면 제거
    if stack[-1] == new :
        stack.pop()
        op.append('-')
    
    else :
        temp = False
        break

if temp == False :
    print('NO')
else : 
    for i in op:
        print(i)