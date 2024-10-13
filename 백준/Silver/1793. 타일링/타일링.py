import sys
input = sys.stdin.readline

dp = [0]*251
dp[0] = 1
dp[1] = 1
while True :
    try :
        N = int(input())
        for i in range(2,N+1) :
            dp[i] = dp[i-1] + dp[i-2]*2
        print(dp[N])
    except :
        break