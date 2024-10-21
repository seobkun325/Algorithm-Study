import sys
input = sys.stdin.readline
N, K = map(int, input().split())
items = [list(map(int, input().split())) for _ in range (N)]
def knapsack(N, K, items):
    # DP 테이블 초기화: (N+1) x (K+1) 크기의 테이블을 0으로 채운다.
    dp = [[0] * (K + 1) for _ in range(N + 1)]
    
    # DP 테이블 채우기
    for i in range(1, N + 1):
        weight, value = items[i-1]  # i번째 물건의 무게와 가치
        for k in range(K + 1):
            if k < weight:
                dp[i][k] = dp[i-1][k]  # 현재 배낭 용량이 물건을 담을 수 없으면 이전 값을 그대로 가져옴
            else:
                dp[i][k] = max(dp[i-1][k], dp[i-1][k - weight] + value)  # 물건을 넣지 않은 경우와 넣은 경우 비교

    return dp[N][K]  # 최종 결과 (N개의 물건을 고려했을 때, 최대 용량 K의 배낭에서 최대 가치)

max_value = knapsack(N, K, items)
print(max_value)