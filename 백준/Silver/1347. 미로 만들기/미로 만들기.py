import sys
input = sys.stdin.readline

n = int(input())
lst = list(input().strip())
N = 0
for x in lst :
    if x == 'F' :
        N += 1
arr = [['#']*(2*N+1) for _ in range(2*N+1)]
direction = (1,0)
c = [N,N]
arr[N][N] = '.'
for x in lst :
    if x == 'R' :
        dx, dy = direction
        direction = (dy,-dx)
    elif x == 'L' :
        dx, dy = direction
        direction = (-dy,dx)
    else:
        dx, dy = direction
        c = [c[0]+dx, c[1]+dy]
        arr[c[0]][c[1]] = '.'

min_row, max_row = 2 * N, 0
min_col, max_col = 2 * N, 0
for i in range(2 * N + 1):
    for j in range(2 * N + 1):
        if arr[i][j] == '.':
            min_row = min(min_row, i)
            max_row = max(max_row, i)
            min_col = min(min_col, j)
            max_col = max(max_col, j)
for i in range(min_row, max_row+1) :
    for j in range(min_col, max_col+1) :
        print(arr[i][j], end='')
    print()