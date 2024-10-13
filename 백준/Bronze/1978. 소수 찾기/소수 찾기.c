#include <stdio.h>

int main(){
  int n;
  scanf("%d", &n);
  int arr[n];
  int count = 0;
  for (int i=0; i< n; i++){
    scanf("%d", &arr[i]);
  }
  for (int i = 0; i < n; i++){
    if (arr[i] % 2 == 0 && arr[i] != 2) continue;
    else if (arr[i] == 1) continue;
    else if (arr[i] % 3 == 0 && arr[i] != 3) continue;
    else if (arr[i] % 5 == 0 && arr[i] != 5) continue;
    else if (arr[i] % 7 == 0 && arr[i] != 7) continue;
    else if (arr[i] % 11 == 0 && arr[i] != 11) continue;
    else if (arr[i] % 13 == 0 && arr[i] != 13) continue;
    else if (arr[i] % 17 == 0 && arr[i] != 17) continue;
    else if (arr[i] % 19 == 0 && arr[i] != 19) continue;
    else if (arr[i] % 23 == 0 && arr[i] != 23) continue;
    else if (arr[i] % 29 == 0 && arr[i] != 29) continue;
    else if (arr[i] % 31 == 0 && arr[i] != 31) continue;
    else count++;
  }
  printf("%d" , count);
}