import sys
from collections import deque
input = sys.stdin.readline

N, M = map(int, input().split())
links = [[] for _ in range(N+1)]
for _ in range(M) :
  a, b = map(int, input().split())
  links[a].append(b)
S = int(input())
fans = list(map(int, input().split()))

end_node = []
for i in range(1,N+1) :
  if links[i] == [] :
    end_node.append(i)

def bfs(start) :
  global ans
  q = deque([start])
  visited = [False]*(N+1)
  visited[start] = True
  while q :
    current = q.popleft()
    if current in end_node :
      print("yes")
      quit()
    for next in links[current] :
      if not visited[next] and next not in fans:
        visited[next] = True
        q.append(next)
  print("Yes")
  
if 1 in fans :
  print("Yes")
else :
  bfs(1)