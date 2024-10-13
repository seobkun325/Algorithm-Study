import sys
input = sys.stdin.readline

N, M = map(int, input().split())
arr = [i for i in range(1,N+1)]
goal = list(map(int, input().split()))
ans = []
cnt = 0
idx = 0
def right() :
    global cnt
    cnt += 1
    arr.insert(0, arr.pop())
def left() :
    global cnt
    cnt += 1
    arr.append(arr.pop(0))
while ans != goal :
    if arr[0] == goal[idx] :
        ans.append(arr.pop(0))
        idx+=1
    else :
        for i in range(len(arr)) :
            if arr[i] == goal[idx] :
                if i <= len(arr)//2 :
                    for _ in range(i) :
                        left()
                else :
                    for _ in range(len(arr)-i) :
                        right()
print(cnt)