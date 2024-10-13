N = int(input())
p = []
for _ in range(N) :
    p.append(int(input()))
if N == 1 :
    print(p[0])
    exit()
if N == 2 :
    print(p[0]+p[1])
    exit()
dp = [0]*N
dp[0] = p[0]
dp[1] = p[0] +p[1]
dp[2] = max(p[0]+p[1], p[0]+p[2], p[1]+p[2])
for i in range(3,N) :
    dp[i] = max(dp[i-1], dp[i-2] + p[i], dp[i-3] + p[i-1] + p[i])
print(max(dp))