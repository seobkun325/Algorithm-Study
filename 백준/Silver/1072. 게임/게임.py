import math
X, Y = map(int, input().split(" "))
Z = 100* Y // X
if Z >= 99:
    print(-1)
else :
    ans = (Z*X + X - 100*Y) / (99 - Z)
    print(math.ceil(ans))