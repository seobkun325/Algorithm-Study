#include <stdio.h>

int main(){

  int jan = 0;
  int feb = jan+31;
  int mar = feb+28;
  int apr = mar+31;
  int may = apr+30;
  int jun = may+31;
  int jul = jun+30;
  int aug = jul+31;
  int sep = aug+31;
  int oct = sep+30;
  int nov = oct+31;
  int dec = nov+30;

  int n, m;
  int day;
  scanf("%d %d", &n, &m);
  if (n == 1){
    day = jan + m;
  }
  else if (n == 2){
    day = feb + m;
  }
  else if (n == 3){
    day = mar + m;
  }
  else if (n == 4){
    day = apr + m;
  }
  else if (n == 5){
    day = may + m;
  }
  else if (n == 6){
    day = jun + m;
  }
  else if (n == 7){
    day = jul + m;
  }
  else if (n == 8){
    day = aug + m;
  }
  else if (n == 9){
    day = sep + m;
  }
  else if (n == 10){
    day = oct + m;
  }
  else if (n == 11){
    day = nov + m;
  }
  else if (n == 12){
    day = dec + m;
  }
  if (day%7 == 1){
    printf("MON");
  }
  else if (day%7 == 2){
    printf("TUE");
  }
  else if (day%7 == 3){
    printf("WED");
  }
  else if (day%7 == 4){
    printf("THU");
  }
  else if (day%7 == 5){
    printf("FRI");
  }
  else if (day%7 == 6){
    printf("SAT");
  }
  else if (day%7 == 0){
    printf("SUN");
  }
}