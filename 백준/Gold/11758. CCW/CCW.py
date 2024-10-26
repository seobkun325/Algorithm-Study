import sys
input = sys.stdin.readline

"""
A(x1,y1), B(x2,y2), C(x3,y3) 가 있을 때,

(x2 - x1)*(y3-y1) - (y2-y1)*(x3-x1)
이 반환하는 값으로 회전 방향 판별

양수 : 반시계, 음수 : 시계 0 : 일직선
"""

x1, y1 = map(int,input().split())
x2, y2 = map(int,input().split())
x3, y3 = map(int,input().split())

result = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1)
if result > 0 :
  print(1)
elif result < 0 :
  print(-1)
else :
  print(0)