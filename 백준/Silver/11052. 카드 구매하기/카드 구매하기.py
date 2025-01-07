import sys
input = sys.stdin.readline

n = int(input())
pkgCost = list(map(int, input().split()))

for i in range(n) :
    for j in range(i) :
        pkgCost[i] = max(pkgCost[i], pkgCost[i-j-1] + pkgCost[j])
print(pkgCost[-1])