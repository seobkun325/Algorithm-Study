#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int max(int a, int b) {
    return a > b ? a : b;
}

int main() {
    int n;
    scanf("%d", &n);
    int t[n], p[n], dp[n + 1];
    memset(t, 0, sizeof(t));
    memset(p, 0, sizeof(p));
    memset(dp, 0, sizeof(dp));
    for (int i = 0; i < n; i++) {
        scanf("%d %d", &t[i], &p[i]);
    }
    for (int i = 0; i < n; i++) {
        // 상담을 진행할 수 있는 경우
        if (i + t[i] <= n) {
            // 현재 상담을 진행했을 때의 이익을 계산하여 dp 배열에 갱신
            dp[i + t[i]] = max(dp[i + t[i]], dp[i] + p[i]);
        }
        // 다음 일자에 대한 최대 이익 계산
        dp[i + 1] = max(dp[i + 1], dp[i]);
    }
    printf("%d", dp[n]);
    return 0;
}
