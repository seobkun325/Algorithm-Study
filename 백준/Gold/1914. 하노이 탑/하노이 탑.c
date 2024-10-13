#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
void hanoi(int n, int start , int middle, int end){
  if (n == 1){
    printf("%d %d\n", start, end);
  }
  else
  {
    hanoi(n-1, start, end, middle);
    printf("%d %d\n", start, end);
    hanoi(n-1, middle, start, end);
  }
}
int main(){
  int n;
  scanf("%d", &n);
  long double count = pow(2,n);
  char cnt[100];
  sprintf(cnt, "%.0Lf", count);
  for (int i = 0; i < 100; i ++){
    if (cnt[i] == '\0'){
      cnt[i-1] = cnt[i-1]-1;
      break;
    }
  }
  printf("%s\n", cnt);

  if (n <= 20)
  hanoi(n, 1, 2, 3);
  return 0;
}