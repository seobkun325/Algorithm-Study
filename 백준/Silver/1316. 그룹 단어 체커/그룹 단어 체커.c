#include <stdio.h>
#include <string.h>
int main(){
  int n;
  scanf("%d", &n);
  int count = 0;

  while(n--){
    char str[101];
    char abc[200];
    int wrong = 0;
    memset(abc, 0, sizeof(abc));
    scanf("%s", str);
    for (int i = 0; str[i] != '\0'; i++){
      abc[str[i]]++;
      if (abc[str[i]] > 1 && str[i] != str[i-1]){
          wrong++;
          break;
        }
      
    }
    if (wrong == 0)  count++;

  }

  printf("%d", count);
  return 0;
}