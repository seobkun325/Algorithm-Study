import sys
from collections import deque
input = sys.stdin.readline

M, N = map(int, input().split())
field = [list(input().strip()) for _ in range (N)]
power = {'W':0, 'B' :0}

def bfs(si,sj) :
  q = deque()
  q.append((si,sj))
  v[si][sj] = 1
  cnt = 1
  while q :
    ci, cj = q.popleft()
    for di, dj in ((-1,0), (1,0), (0,1), (0,-1)):
      ni, nj = ci+di, cj +dj
      if 0<=ni<N and 0<=nj<M and v[ni][nj] == 0 and field[ni][nj] == field[si][sj] :
        q.append((ni,nj))
        v[ni][nj] = 1 
        cnt += 1
  power[field[si][sj]] += cnt**2

v = [[0]*M for _ in range (N)]
for i in range (N) :
  for j in range (M) :
    if v[i][j] == 0 :
      bfs(i,j)
print(power['W'],power['B'])