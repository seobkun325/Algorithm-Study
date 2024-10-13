#include <stdio.h>

int main(){
  int t;
  scanf("%d", &t);
  int tt= t;
  int line = 0;
  int lineNum = 1;
  while(1){
    if (tt > 0){
      tt = tt - lineNum;
      lineNum++;
      line++;
    }
    else{
      break;
    }
  }
  int leftNum = 0;
  for (int i = 0; i < line; i++){
    leftNum += i;
  }
  leftNum = t-leftNum;
  if (line %2 == 0){
    printf("%d/%d", leftNum,line+1-leftNum);
  }
  else{
    printf("%d/%d", line+1-leftNum,leftNum);
  }
}