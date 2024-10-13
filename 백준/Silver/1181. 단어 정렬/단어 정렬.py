import sys
input = sys.stdin.readline
n = int(input())
lst = []
for _ in range(n) :
    lst.append(input().strip())
lst = list(set(lst))
lst.sort(key = lambda x : (len(x), x))
for x in lst :
    print(x)