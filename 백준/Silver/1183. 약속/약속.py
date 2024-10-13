import sys
input = sys.stdin.readline

N = int(input())
arr = []
for _ in range(N) :
    a, b = map(int, input().split(" "))
    arr.append(a-b)
arr.sort()
if N % 2 == 1 :
    print(1)
else :
    print(abs(arr[N//2] - arr[N//2 -1])+1)