import sys
from collections import deque
input = sys.stdin.readline

N = int(input())
stack = deque()
status = []

for _ in range(N):
  cmd = list(input().strip().split())
  if cmd[0] == '1' :
    stack.append(cmd[1])
    status.append('back')
  elif cmd[0] == '2' :
    stack.appendleft(cmd[1])
    status.append('front')
  else :
    if not stack :
      continue
    if status.pop() == 'back' :
      stack.pop()
    else:
      stack.popleft()
if not stack :
  print(0)
else :
  print("".join(stack))