def solve(L) :
    count = 0
    for i in range(N) :
        for j in range(N) :
            if v[i][j] == 0 and arr[i][j] > L :
                bfs(i,j,L)
                count += 1
    return count
    
def bfs(x,y,z) :
    q=[]
    q.append((x,y))
    v[x][y] = 1
    while q :
        cx, cy = q.pop()
        for dx, dy in ((-1,0),(1,0),(0,1),(0,-1)) :
            nx, ny = cx + dx, cy + dy
            if 0<=nx<N and 0<=ny<N and v[nx][ny] == 0 and arr[nx][ny] > z :
                q.append((nx,ny))
                v[nx][ny] = 1

N = int(input())
ans = 0
arr = [list(map(int, input().split())) for _ in range (N)]
for L in range(100) :
    v = [[0]*(N+1) for _ in range (N)]
    ans = max(ans,solve(L))
print(ans)