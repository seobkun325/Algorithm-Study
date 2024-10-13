#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int arr[101];
int dp[10001];
int main(){
  int n, k;
  scanf("%d %d",&n,&k);
  for (int i = 0; i < n; i++){
    scanf("%d", &arr[i]);
  }

  dp[0] = 1;
  for(int i = 0; i < n; i++){
    for(int j = arr[i]; j <= k; j++){
      dp[j] += dp[j-arr[i]];
    }
  }

  printf("%d", dp[k]);




  return 0;
}