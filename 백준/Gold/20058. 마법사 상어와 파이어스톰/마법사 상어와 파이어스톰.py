import sys
from collections import deque
input = sys.stdin.readline

N, Q = map(int ,input().split())
A = [list(map(int, input().split())) for _ in range(2**N)]
L = list(map(int,input().split()))

A_len = len(A) # 2^N

# 함수들 정의 1.turn, 2.fire, 3.bfs
def turn(level) :
  # 일단 구역을 나눠
  for x in range (0,A_len,2**level) : 
    for y in range (0,A_len,2**level) :

      # 임시 구역 설정
      tmp = [[0]*(2**level) for _ in range(2**level)]

      for i in range(2**level) :
        for j in range(2**level) :
          tmp[j][2**level-i-1] = A[x+i][y+j]
      
      # 임시구역을 원래 배열 A에 적용
      for i in range(2**level) :
        for j in range(2**level) :
          A[x+i][y+j] = tmp[i][j]
      
def fire(x,y) :
  cnt = 0
  for nx,ny in ((x+1,y),(x-1,y),(x,y+1),(x,y-1)) :
    if 0<=nx<(2**N) and 0<=ny<(2**N) and A[nx][ny] > 0 :
      cnt += 1
  if cnt <3 and A[x][y] > 0:
    loss_ice.append((x,y))

def bfs(si,sj) :
  q = deque()
  q.append((si,sj))
  visited[si][sj] = 1
  cnt = 1
  while q :
    ci, cj = q.popleft()
    for di, dj in ((1,0),(-1,0),(0,1),(0,-1)) :
      ni, nj = ci+di, cj+dj
      if 0<=ni<(2**N) and 0<=nj<(2**N) and visited[ni][nj] == 0 and A[ni][nj] > 0:
        q.append((ni,nj))
        visited[ni][nj] = 1
        cnt +=1
  return cnt

# 싹다 시전
while L :
  current_level = L.pop(0)
  turn(current_level)
  loss_ice = [] # 녹을 얼음 좌표 담을 곳
  for i in range(2**N) :
    for j in range(2**N) :
      fire(i,j)
  for key in loss_ice :
    A[key[0]][key[1]] -=1


# 전체 얼음
total_ice = sum(sum(x) for x in A)
\
# 얼음 탐색
big_ice = 0
visited = [[0]*(2**N) for _ in range (2**N)]
for i in range (2**N) :
  for j in range(2**N) :
    if A[i][j] > 0 and visited[i][j] == 0:
      big_ice = max(big_ice,bfs(i,j))
print(total_ice)
print(big_ice)
