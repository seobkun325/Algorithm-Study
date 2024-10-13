#include <stdio.h>
#include <string.h>

int main(){
  int n;
  int ans = 0;
  scanf("%d",&n);
  for (int i = 1;i < 1000000; i++){
    int temp = i;
    int sum = i;
    while(temp){
      sum += (temp%10);
      temp/=10;
    }
    if (sum == n){
      ans = i;
      break;
    }
  }
  if (ans == 0){
    printf("0");
  }
  else{
    printf("%d",ans);
  }
  return 0;
}