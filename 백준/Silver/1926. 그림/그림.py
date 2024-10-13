import sys
input = sys.stdin.readline

N, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]

v = [[0]*M for _ in range(N)]
ans = []

def bfs(si,sj) :
  global cnt
  q = []
  v[si][sj] = 1
  q.append((si,sj))
  while q :
    ci, cj= q.pop(0)
    for di, dj in ((1,0), (-1,0), (0,1), (0,-1)) :
      ni, nj = ci+di, cj+dj
      if 0<=ni<N and 0<=nj<M and v[ni][nj] == 0 and arr[ni][nj] == 1 :
        v[ni][nj] = 1
        cnt += 1
        q.append((ni,nj))
  ans.append(cnt)
key = 0

for i in range(N) :
  for j in range(M) :
    if arr[i][j] == 1 and v[i][j] == 0:
      cnt = 1
      bfs(i,j)
      key += 1

print(key)
if ans :
  print(max(ans))
else :
  print(0)