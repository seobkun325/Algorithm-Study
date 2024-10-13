#include <stdio.h>

int main(){
  int series;
  int cnt = 1;
  int i;
  int temp, check;
  scanf("%d", &series);
  if (series == 1){
    printf("666");
    return 0;
  }
  for (i = 667;; i++){
    temp = i;
    check = 0;
    while (temp){
      if(temp % 1000 == 666){
        check = 1;
      }
      temp /= 10;
    }
    if (check){
      cnt++;
      if( cnt == series)
      {
        break;
      }
    }

  }
  printf("%d", i);
  return 0;
}