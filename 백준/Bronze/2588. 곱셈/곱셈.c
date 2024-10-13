#include <stdio.h>

int main(void)
{
    int a,b, b1, b2, b3;
    scanf("%d %d", &a, &b);
    b1 = b/100;
    b3 = b%10;
    b2 = (b%100-b3)/10;
    int line3 = a * b3;
    int line4 = a * b2;
    int line5 = a * b1;
    int line6 = a*b;
    printf("%d\n%d\n%d\n%d", line3, line4, line5,line6);

}