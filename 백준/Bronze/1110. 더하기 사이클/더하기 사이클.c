#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#define size 100

int main()
{
    int num;
    scanf("%d", &num);
    int first, second, newnum;
    int cnt = 1;
    int ans = num;
    while(1)
    {
        first = num/10;
        second = num%10;
        newnum = second*10+((first+second)%10);
        if(ans == newnum)
            break;
        else
            cnt++;
            num = newnum;

    }
    printf("%d",cnt);
    return 0;
}