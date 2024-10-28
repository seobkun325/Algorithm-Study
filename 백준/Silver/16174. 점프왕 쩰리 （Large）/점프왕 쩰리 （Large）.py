import sys
from collections import deque
input = sys.stdin.readline

N = int(input())

gameMap = [list(map(int, input().split())) for _ in range(N)]
visited = [[0]*N for _ in range(N)]

def move(si, sj):
  q = deque()
  q.append((si, sj))
  visited[si][sj] = 1
  while q :
    ci, cj = q.popleft()
    for di, dj in ((gameMap[ci][cj],0), (0,gameMap[ci][cj])) :
      ni, nj = ci+ di, cj+dj
      if 0<=ni<N and 0<=nj<N and visited[ni][nj] == 0:
        q.append((ni,nj))
        visited[ni][nj] = 1

move(0,0)
if visited[N-1][N-1] == 1 :
  print("HaruHaru")
else : 
  print("Hing")