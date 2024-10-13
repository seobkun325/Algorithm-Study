def dfs(c) :
    ans_dfs.append(c)
    v[c] = 1
    for n in adj[c] :
        if not v[n]:
            dfs(n)

def bfs(s) :
    q = []
    q.append(s)
    ans_bfs.append(s)
    v[s] = 1

    while q:
        c = q.pop(0)
        for n in adj[c] :
            if not v[n] :
                q.append(n)
                ans_bfs.append(n)
                v[n] = 1


N, M, V = map(int, input().split())
adj = [[] for _ in range(N+1)]
for i in range(M) :
    a,b = (map(int, input().split()))
    adj[a].append(b)
    adj[b].append(a)

for i in range (N+1) :
    adj[i].sort()

v = [0] * (N+1)
ans_dfs= []
dfs(V)

v = [0] * (N+1)
ans_bfs= []
bfs(V)

print(*ans_dfs)
print(*ans_bfs)