N, L = map(int,input().split(" "))
arr = list(map(int, input().split(" ")))
arr.sort()
ans = 0
if L == 1 :
    print(len(arr))
else :
    L = L-1
    s = arr.pop(0)
    e = s+L
    while arr :
        c = arr.pop(0)
        if s<=c<=e :
            continue
        else :
            s = c
            e = c+L
            ans += 1
    print(ans+1)

