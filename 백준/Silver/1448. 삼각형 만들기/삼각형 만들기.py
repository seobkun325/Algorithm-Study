import sys
input = sys.stdin.readline

N = int(input())
arr = []
for _ in range(N):
    arr.append(int(input()))
arr.sort(reverse = True)
ans = -1
for i in range(N-2) :
    if arr[i] < arr[i+1] + arr[i+2] :
        ans = arr[i] + arr[i+1] + arr[i+2]
        break

print(ans)

