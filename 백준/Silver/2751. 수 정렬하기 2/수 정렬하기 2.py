import sys
input = sys.stdin.readline
n = int(input())
arr = []
for _ in range(n) :
    arr.append(int(input()))
arr.sort()
print(*arr,sep='\n')