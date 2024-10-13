def bfs(si,sj):
    q = []
    q.append((si,sj))
    v[si][sj] = 1
    count = 1
    while q:
        x, y = q.pop(0)
        for dx, dy in ((-1,0), (1,0), (0,1), (0,-1)) :
            nx, ny = x +dx, y + dy
            if 0<=nx<n and 0<=ny<n and v[nx][ny] == 0 and arr[nx][ny] == 1 :
                q.append((nx, ny))
                v[nx][ny] = 1
                count += 1
    return count

n = int(input())
arr = [list(map(int, input()))for _ in range(n)]
v = [[0]* n for _ in range(n)]
ans = []

for i in range(n) :
    for j in range(n) :
        if arr[i][j] == 1 and v[i][j] == 0 :
            ans.append(bfs(i,j))
ans.sort()
print(len(ans), *ans, sep='\n')