import sys
from collections import deque, defaultdict
input = sys.stdin.readline

N, M = map(int, input().split())
graph = defaultdict(list)
for _ in range(M) :
  a, b = input().split()
  graph[b].append(a)

def find(num) :
  q = deque()
  q.append(num)
  visited = defaultdict(int)
  result = []
  while q :
    current = q.popleft()
    result.append(current)

    for next in graph[current] :
      if not visited[next] :
        visited[next] = 1
        q.append(next)
  return result

ans = []
Q = int(input())
for _ in range(Q) :
  x, y = input().split()
  if x == y :
    ans.append("gg")
  elif y in find(x) :
    ans.append(y)
  elif x in find(y) :
    ans.append(x)
  else :
    ans.append("gg")

print(*ans)