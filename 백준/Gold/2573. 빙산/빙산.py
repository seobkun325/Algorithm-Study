def bfs(si,sj,v) :
    q = []
    q.append((si,sj))
    v[si][sj] = 1
    while q:
        ci, cj = q.pop(0)
        for di, dj in ((-1,0), (1,0), (0,-1), (0,1)) :
            ni, nj = ci + di , cj + dj
            if 0<=ni<N and 0<=nj<M and v[ni][nj] == 0 and arr[ni][nj] > 0:
                q.append((ni,nj))
                v[ni][nj] = 1

def solve() :
    for Y in range(1,100000) :
        a_sub = [[0]*M for _ in range(N)]
        for i in range(1, N-1) :
            for j in range(1, M-1) :
                if arr[i][j] == 0:
                    continue
                for di, dj in ((-1,0), (1,0), (0,1), (0,-1)) :
                    ni, nj = i + di, j + dj
                    if arr[ni][nj] == 0:
                        a_sub[i][j] +=1
        for i in range(1, N-1) :
            for j in range(1, M-1) :
                if a_sub[i][j] > 0 :
                    arr[i][j] = max(0, arr[i][j]-a_sub[i][j])

        cnt = 0
        v = [[0]*M for _ in range(N)]
        for i in range (1, N-1) :
            for j in range (1, M-1) :
                if v[i][j] == 0 and arr[i][j] >0:
                    bfs(i,j,v)
                    cnt += 1
                    if cnt >1:
                        return Y
        if cnt == 0 :
            return 0
                    
    return 0
    

N, M = map(int,input().split())
arr = [list(map(int, input().split())) for _ in range (N)]
ans = solve()
print (ans)