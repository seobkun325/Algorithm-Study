import sys
from collections import deque
input = sys.stdin.readline
N = int(input())
shortest = int(1e15)
ans = 0
sx,sy, ex, ey = map(int, input().split())
for x in range (N) :
  M = int(input())
  middle = deque()
  for _ in range(M) :
    mx,my = map(int,input().split())
    middle.append((mx,my))
  middle.appendleft((sx,sy))
  middle.append((ex,ey))
  dist = 0
  for i in range(len(middle) -1) :
    dist += ((abs(middle[i][0]-middle[i+1][0])) +(abs(middle[i][1]-middle[i+1][1])))
  if shortest >= dist :
    shortest = dist
    ans = x+1

print(ans)
