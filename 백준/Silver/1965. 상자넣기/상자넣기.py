import sys
input = sys.stdin.readline

n = int(input())
box = list(map(int, input().split(" ")))
dp = [1]*n
for i in range(1,n) :
    hubo = [0]
    for j in range(0, i) :
        if box[j] < box[i] :
            hubo.append(dp[j])
    dp[i] = max(hubo)+1
print(max(dp))
