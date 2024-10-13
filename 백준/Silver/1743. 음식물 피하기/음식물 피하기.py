import sys
input = sys.stdin.readline

N, M, K = map(int, input().split())
arr = [[0]*M for _ in range(N)]

for _ in range(K) :
    x, y = map(int, input().split())
    arr[x-1][y-1] = 1
v = [[0]*M for _ in range(N)]

def bfs(si, sj) :
    global cnt
    q = []
    q.append((si, sj))
    v[si][sj] = 1
    while q :
        ci, cj = q.pop(0)
        for di, dj in ((-1,0), (1,0), (0,1), (0,-1)) :
            ni, nj = ci+di, cj+dj
            if 0<=ni<N and 0<=nj<M and arr[ni][nj] == 1 and v[ni][nj] == 0 :
                q.append((ni, nj))
                v[ni][nj] =1
                cnt += 1
ans = []
for i in range(N) :
    for j in range(M) :
        cnt = 1
        if arr[i][j] == 1 and v[i][j] == 0:
            bfs(i,j)
            ans.append(cnt)
print(max(ans))