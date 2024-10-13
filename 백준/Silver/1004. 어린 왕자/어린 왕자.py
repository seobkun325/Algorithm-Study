import sys
input = sys.stdin.readline

T = int(input())
for _ in range(T) :
    x1, y1, x2, y2 = map(int, input().strip().split(' '))
    ans = 0
    n = int(input())
    for _ in range (n) :
        x, y, r = map(int, input().strip().split(' '))
        if (x-x1)**2 + (y-y1)**2 < r**2 :
            ans += 1
        if (x-x2)**2 + (y-y2)**2 < r**2 :
            ans += 1
        if ((x-x1)**2 + (y-y1)**2 < r**2) and ((x-x2)**2 + (y-y2)**2 < r**2) :
            ans -= 2
    print(ans)
