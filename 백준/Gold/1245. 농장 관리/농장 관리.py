import sys
input = sys.stdin.readline

n, m = map(int ,input().split())
arr = [list(map(int, input().split())) for _ in range(n)]
v = [[0]*m for _ in range(n)]
def bfs(si,sj,value) :
  global ans
  q = []
  mess = []
  mess.append((si,sj))
  q.append((si,sj))
  v[si][sj] = 1
  while q :
    ci, cj = q.pop(0)
    for di, dj in ((-1,0),(1,0),(0,1),(0,-1),(1,1),(1,-1),(-1,1),(-1,-1)) :
      ni, nj = ci+di, cj+dj
      if 0<=ni<n and 0<=nj<m and v[ni][nj] == 0 and arr[ni][nj] == value :
        q.append((ni,nj))
        v[ni][nj] = 1
        mess.append((ni,nj))

  while mess :
    ci, cj = mess.pop(0)
    for di, dj in ((-1,0),(1,0),(0,1),(0,-1),(1,1),(1,-1),(-1,1),(-1,-1)) :
      ni, nj = ci+di, cj+dj
      if 0<=ni<n and 0<=nj<m and arr[ni][nj] > value :
        return
  ans += 1

ans = 0
for i in range (n) :
  for j in range (m) :
    if v[i][j] == 0 :
      bfs(i,j,arr[i][j])
print(ans)