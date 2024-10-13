def bfs(start, end) :
    q = []
    q.append(start)
    v[start] = 0
    while q:
        c = q.pop(0)
        for n in arr[c] :
            if v[n] == -1 :
                q.append(n)
                v[n] = v[c] + 1
    return v[end]
n = int(input())
arr = list([] for _ in range(n+1))
s, e = map(int, input().split())
num = int(input())
for _ in range(num) :
    a, b = map(int, input().split())
    arr[a].append(b)
    arr[b].append(a)
v = [-1]*(n+1)
ans = bfs(s,e)
print(ans)