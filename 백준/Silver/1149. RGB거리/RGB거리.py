import sys
input = sys.stdin.readline
N = int(input())
dp = [[0]*3 for _ in range (N)]
for i in range(N) :
    dp[i][0], dp[i][1], dp[i][2] = map(int, input().split(" "))
for i in range(1, N) :
    for j in range(3) :
        if j == 0 :
            dp[i][j] += min(dp[i-1][1], dp[i-1][2])
        elif j == 1 :
            dp[i][j] += min(dp[i-1][0], dp[i-1][2])
        else :
            dp[i][j] += min(dp[i-1][0], dp[i-1][1])
print(min(dp[N-1]))