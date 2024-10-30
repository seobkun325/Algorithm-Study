import sys
input = sys.stdin.readline

def zeros(num) : # N!의 끝 0 개수 구하는 함수
  result = 0
  while num > 0 :
    result += (num//5)
    num = num // 5
  return result


start = 5
end = 5000000000

M = int(input())
while start <= end:
  mid = (start + end) // 2
  if zeros(mid) >= M :
    end = mid -1
  else :
    start = mid + 1
if zeros(start) == M :
  print(start)
else :
  print(-1)
