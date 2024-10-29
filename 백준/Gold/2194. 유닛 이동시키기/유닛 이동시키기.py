import sys
from collections import deque
input = sys.stdin.readline

N, M, A, B, K = map(int ,input().split())
obstacles = []
v = [[0]*(M+1) for _ in range(N+1)]

for _ in range(K) : # 장애물 받을때 visited 에 -1 대입 -1은 갈 수 없는 곳. obstacle 배열로 해서 그 좌표가 이 안에 있나 하니까 시간복잡도 터짐
  obs_x, obs_y = map(int ,input().split())
  v[obs_x][obs_y] = -1

si,sj = map(int ,input().split()) 
ei,ej = map(int ,input().split())


def move(si, sj) :
  q = deque()
  q.append((si,sj))
  v[si][sj] = 1
  while q :
    ci, cj = q.popleft() # 모든 "기준점"은 유닛의 왼쪽 상단 좌표
    for di, dj in ((-1,0), (1,0), (0,1), (0,-1)) : # 상하좌우 탐색
      ni, nj = ci+di, cj+dj
      if 1<=ni<=N and 1<=nj<=M and v[ni][nj] == 0 : # "기준점"이 갈 수 있는 곳인지
        possibility = True # 이동 가능성을 부여
        for qi in range(A) :
          if not possibility :
            break
          for qj in range(B) :
            if not 1<=ni+qi<=N  or not 1<=nj+qj<=M : # 영역 넘어가면 가능성 제거
              possibility = False 
              break
            else :
              if v[ni+qi][nj+qj] == -1 :# 영역 내여도 장애물이면 가능성 제거
                possibility = False 
                break
        if possibility : # 가능성 있으면 이동
          q.append((ni,nj))
          v[ni][nj] = v[ci][cj] + 1

move(si,sj)

if v[ei][ej] <= 0:
  print(-1)
else :
  print(v[ei][ej]-1)