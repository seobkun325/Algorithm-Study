import sys
input = sys.stdin.readline

xs, ys = map(int, input().split())
xe, ye, dx, dy = map(int ,input().split())

def gcd(a, b):
    if a % b == 0:
      return b
    return gcd(b, a%b)

def distance(a,b) :
  global xs, ys
  return [a,b,(xs-a)**2 + (ys-b)**2]

if dx == 0:
  dx = 0
  dy = 1
elif dy == 0 :
  dy = 0
  dx = 1
else :
  k = gcd(dx,dy)
  dx, dy = dx//k, dy//k

ans = distance(xe,ye)

i = 1

while True:
  xe += dx
  ye += dy
  tmp = distance(xe,ye)
  if tmp[2] < ans[2] :
    ans = tmp
  else :
    print(ans[0], ans[1])
    break
  
