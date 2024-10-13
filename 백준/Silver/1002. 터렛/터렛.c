#include<stdio.h>
#include<stdlib.h>
#include<math.h>
int function(int x1, int y1, int r1, int x2, int y2, int r2){
	int x = x1-x2;
	int y = y1-y2;
	int r = r1-r2;
	int hap = r1+r2;
	int rel = (x*x + y*y);
  if(rel < r1*r1){
    if(r*r > rel)
      return 0;
    else if(r*r <rel)
      return 2;
    else
      return 1;
  }
  else if (rel > r1*r1){
		if(hap*hap > rel)
		  return 2;
		else if(hap*hap < rel)
		  return 0;
		else
		  return 1;
	}
	else
		return 2;
}
int main(){
	int t;
	scanf("%d", &t);
	while(t--){
		int x1, y1, r1, x2, y2, r2, answer = 0;
		scanf("%d %d %d %d %d %d",&x1, &y1, &r1, &x2, &y2, &r2);

		if ( r2 > r1){
			int tmpx, tmpy, tmpr;
			tmpx = x1, tmpy = y1, tmpr = r1;
			x1 = x2, y1 = y2, r1 = r2;
			x2 = tmpx, y2 = tmpy, r2 = tmpr;
		}
		if(x1 == x2 && y1 == y2 && r1 == r2)
			answer = -1;
		else
		  answer = function(x1, y1, r1, x2, y2, r2);
		printf("%d\n",answer);
	}
	return 0;
}
