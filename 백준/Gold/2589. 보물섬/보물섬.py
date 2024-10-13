import sys
input = sys.stdin.readline

n, m = map(int, input().split())
arr = [list(input().strip()) for _ in range(n)]
def bfs(si, sj) :
    v = [[-1]*m for _ in range(n)]
    q = []
    global ans
    q.append((si,sj))
    v[si][sj] = 0
    while q :
        ci, cj = q.pop(0)
        for di, dj in ((-1,0), (1,0), (0,1), (0,-1)) :
            ni, nj= ci+di, cj+dj,
            if 0<=ni<n and 0<=nj<m and v[ni][nj] == -1 and arr[ni][nj] == 'L' :
                q.append((ni,nj))
                v[ni][nj] = v[ci][cj] + 1
                ans = max(ans,v[ni][nj])
ans = 0
for i in range(n) : 
    for j in range(m) :
        if arr[i][j] == 'L' :
            bfs(i,j)
print(ans)
