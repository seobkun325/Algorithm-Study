import sys
from collections import deque
input = sys.stdin.readline
d = {}
N, M = map(int,input().split())
def bfs(s) :
  q = deque()
  q.append(s)
  d[s] = 1
  while q :
    c = q.popleft()
    if c == M :
      print("YES")
      break
    if c % 2 == 0 and (not c//2 in d):
      q.append(c//2)
      d[c//2] = 1
    else :
      for next in ((c-1)//2, (c+1)//2):
        if next >= 0 and (not next in d):
          q.append(next)
          d[next] = 1
  else :
    print("NO")

bfs(N)