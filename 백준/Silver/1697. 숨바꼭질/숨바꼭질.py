def bfs(s,e) :
    q = []
    q.append(s)
    v[s] = 0
    while q :
        c = q.pop(0)

        if c == e :
            return v[c]
        for n in (c-1, c+1, c*2) :
            if n >= 0 and n <= 200000 and v[n] == 0 :
                q.append(n)
                v[n] = v[c] + 1


import sys
start, end = map(int, input().split())
ans = sys.maxsize
v = [0]*200001
ans = bfs(start,end)
print(ans)