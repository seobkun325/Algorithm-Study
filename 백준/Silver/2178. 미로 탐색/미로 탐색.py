def bfs(si, sj, ei, ej) :
    q = []
    q.append((si, sj))
    v = [[0]*M for _ in range(N)]
    v[si][sj] = 1
    while q:
        ci, cj = q.pop(0)

        if (ci,cj) == (ei, ej) :
            return v[ci][cj]
        for di, dj in ((-1,0), (1,0), (0,-1), (0,1)) :
            ni, nj = ci+di, cj+dj
            if 0<=ni<N and 0<=nj<M and v[ni][nj] == 0 and arr[ni][nj] == 1 :
                q.append((ni,nj))
                v[ni][nj] = v[ci][cj] + 1

N, M = map(int, input().split())
arr = [list(map(int, input())) for _ in range(N)]
ans = bfs(0, 0, N-1, M-1)
print(ans)