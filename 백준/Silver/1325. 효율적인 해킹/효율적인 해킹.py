import sys
from collections import deque
input = sys.stdin.readline

N, M = map(int ,input().split())

links = [[]for _ in range (N+1)] 
for _ in range (M) :
  a, b = map(int, input().split())
  links[b].append(a)

ans = []

for i in range (1,N+1) :
  q = deque()
  q.append(i)
  visited = [0]*(N+1)
  visited[i] = 1
  tmp = 0
  while q :
    current = q.popleft()
    for next in links[current] :
      if visited[next] == 0 :
        visited[next] = visited[current] +1
        q.append(next)
        tmp += 1
  ans.append([tmp,i])

ans.sort(key = lambda x : (x[0],-x[1]), reverse = True)

for i in range (N) :
  if ans[i][0] == ans[0][0] :
    print(ans[i][1], end= " ")