import sys
from collections import defaultdict
input = sys.stdin.readline

n, m = map(int, input().split())
ans = []
d = defaultdict(int)
for i in range(n) :
    x = input().strip()
    d[x] +=1
for j in range(m) :
    x = input().strip()
    if x in d :
        ans.append(x)

ans.sort()
print(len(ans))
for x in ans :
    print(x)
