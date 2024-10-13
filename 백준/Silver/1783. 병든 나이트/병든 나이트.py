import sys
input = sys.stdin.readline

N, M = map(int, input().split())
if N == 1:
    print(1)
elif N == 2:
    if (M-1) // 2 < 4 :
        print((M-1)//2+1)
    else :
        print(4)
elif N>= 3 :
    if (M-1) < 4 :
        print(M)
    elif 4<=(M-1)<6 :
        print(4)
    else :
        print(M-2)
