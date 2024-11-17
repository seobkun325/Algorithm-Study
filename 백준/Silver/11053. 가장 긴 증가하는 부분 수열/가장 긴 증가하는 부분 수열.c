#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(){
  int n;
  scanf("%d",&n);
  int arr[n];
  for (int i = 0; i < n; i++){
    scanf("%d",&arr[i]);
  }
  int dp[n];
  for (int i = 0; i < n; i++){
    dp[i] = 1;
    for (int j = 0; j < i; j++){
      if (arr[i] > arr[j] && dp[i] <= dp[j]){
        dp[i]++;
      }
    }
  }
  int max = 0;
  for (int i = 0; i < n; i++){
    if (dp[i] > max) max = dp[i];
  }
  printf("%d", max);
  return 0;
}