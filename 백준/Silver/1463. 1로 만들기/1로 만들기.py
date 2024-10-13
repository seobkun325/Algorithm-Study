import sys
input = sys.stdin.readline

n = int(input())

# dp[i]는 i를 1로 만들기 위한 최소 연산 횟수
dp = [float('inf')] * (n + 1)
dp[1] = 0

for i in range(2, n + 1):
    # i에서 1을 빼는 경우
    dp[i] = min(dp[i], dp[i - 1] + 1)
    
    # i가 2로 나누어 떨어지는 경우
    if i % 2 == 0:
        dp[i] = min(dp[i], dp[i // 2] + 1)
    
    # i가 3으로 나누어 떨어지는 경우
    if i % 3 == 0:
        dp[i] = min(dp[i], dp[i // 3] + 1)

print(dp[n])
