import sys
input = sys.stdin.readline

N = int(input())
arr = []
for _ in range(N) :
    arr.append(input().strip())

def arrNumSum(x) : 
    result = sum(int(s) for s in x if s.isdigit())
    return result


arr.sort(key = lambda x: (len(x), arrNumSum(x), x))
for word in arr :
    print(word)