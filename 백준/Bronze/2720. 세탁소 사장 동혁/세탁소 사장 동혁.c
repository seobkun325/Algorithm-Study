#include <stdio.h>

int main(void)
{
    int n;
    int cost;
    scanf("%d", &n);
    for (int i = 0; i < n; i ++)
    {
        scanf("%d", &cost);
        int quarter = cost/ 25;
        cost = cost- quarter*25;
        int dime = cost/10;
        cost = cost- dime*10;
        int nickel = cost/5;
        cost = cost-nickel*5;
        int penny = cost;
        printf("%d %d %d %d\n", quarter, dime, nickel, penny);
    }
}