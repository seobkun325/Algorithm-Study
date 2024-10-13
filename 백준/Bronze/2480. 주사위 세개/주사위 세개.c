#include <stdio.h>
void p(int cost);
int main(void)
{
    int a, b, c, cost;
    scanf("%d %d %d", &a,&b,&c);
    if(a > b)
    {
        if (b > c)
        {
            cost = a*100;
            p(cost);
        }
        else if (a < c)
        {
            cost = c*100;
            p(cost);
        }
        else if(c == b || c == a)
        {
            cost = 1000 +c*100;
            p(cost);
        }
        else
        {
            cost = a*100;
            p(cost);
        }
    }
    else if (a == b)
    {
        if (c == b)
        {
            cost = 10000 + a*1000;
            p(cost);
        }
        else
        {
            cost = 1000 + a*100;
            p(cost);
        }
    }
    else
    {
        if (a > c)
        {
            cost = b*100;
            p(cost);
        }
        else if (b < c)
        {
            cost = c*100;
            p(cost);
        }
        else if(c == b || c == a)
        {
            cost = 1000 +c*100;
            p(cost);
        }
        else
        {
            cost = b*100;
            p(cost);
        }
        
    }

    return 0;
}

void p(int cost)
{
    printf("%d",cost);
}