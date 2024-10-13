def bfs(s) :
    q = []
    count = 0
    q.append(s)
    v[s] = 1
    while q:
        c = q.pop(0)

        for n in arr[c] :
            if not v[n] :
                q.append(n)
                v[n] = 1
                count +=1
        if not q : 
            return count
    


N = int(input())
M = int(input())
arr = list([] for _ in range(N+1))
for _ in range(M):
    a, b = map(int, input().split())
    arr[a].append(b)
    arr[b].append(a)
v = [0] * (N+1)

print(bfs(1))