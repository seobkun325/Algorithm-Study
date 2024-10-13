def bfs(s) :
    v = [0]*(V+1)
    q = []
    q.append((s, 0))
    v[s] = 1
    res = [0,0]
    while q :
        c_node, c_dist = q.pop(0)

        for n_node, n_dist in arr[c_node] :
            if v[n_node] == 0 :
                cal = c_dist + n_dist
                q.append((n_node, cal))
                v[n_node] = 1
                if res[1] < cal :
                    res[0] = n_node
                    res[1] = cal
    return res

V = int(input())
arr = [[] for _ in range(V+1)]
for i in range(V) :
    line = list(map(int, input().split()))
    cn = line[0]
    idx = 1
    while line[idx] != -1 :
        node, dis = line[idx], line[idx+1]
        arr[cn].append((node, dis))
        idx += 2
ans, _= bfs(1)
print(bfs(ans)[1])
