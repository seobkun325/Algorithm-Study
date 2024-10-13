import sys
input = sys.stdin.readline

N = int(input())
arr = list(map(int, input().split()))
dpMax = arr
dpMin = arr

for _ in range(N-1) :
    arr = list(map(int, input().split()))
    dpMax = [arr[0] + max(dpMax[0], dpMax[1]), arr[1] + max(dpMax[0], dpMax[1], dpMax[2]), arr[2] + max(dpMax[1], dpMax[2])]
    dpMin = [arr[0] + min(dpMin[0], dpMin[1]), arr[1] + min(dpMin[0], dpMin[1], dpMin[2]), arr[2] + min(dpMin[1], dpMin[2])]
print(max(dpMax), min(dpMin))
