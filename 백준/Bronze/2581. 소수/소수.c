#include <string.h>
#include <stdio.h>
#include <math.h>
int main(){

  int m, n;
  scanf("%d %d", &m, &n);
  int keyNum = sqrt(n);
  int num[n+1];
  memset(num, 0, sizeof(num));
  for (int i = 2; i <= keyNum; i++){
    if (num[i] == 0){
      for (int j = i*i; j <= n; j += i){
        num[j] = 1;
      }
    }
  }
  int sum = 0;
  int min = -1;
  for (int i = m; i <= n; i++)
  {
    if (i > 1 && num[i] == 0) 
    {
      sum += i;
      if (min == -1)
        min = i;
    }
  }



  if (sum > 0)
    printf("%d\n%d", sum, min);
  else
    printf("-1");
}