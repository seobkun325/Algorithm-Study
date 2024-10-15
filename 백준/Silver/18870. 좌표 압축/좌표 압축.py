from collections import defaultdict
import sys
input = sys.stdin.readline

n = int(input())
num = list(map(int, input().split()))
arr = sorted(set(num))
d = defaultdict(int)
for i in range(len(arr)) :
    d[arr[i]] = i
for i in num :
    print(d[i], end=" ")