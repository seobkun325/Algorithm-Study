import sys
input = sys.stdin.readline
def dfs(n, sm, cnt) :
    global ans
    if n == N :
        if sm == S and cnt > 0 :
            ans+=1
        return
    dfs(n+1, sm+arr[n], cnt+1)
    dfs(n+1, sm, cnt)

N, S = map(int, input().split(' '))

arr = list(map(int,input().split(' ')))
ans = 0
v = [0]*N
dfs(0, 0, 0)
print(ans)