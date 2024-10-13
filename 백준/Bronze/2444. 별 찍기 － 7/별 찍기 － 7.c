#include <stdio.h>

int main(void)
{
    int N;
    scanf("%d", &N);
    for (int i = 1; i <= N-1; i++)
    {
        printf(" ");
        for (int j = N-1-i; j >= 1; j--)
        {
            printf(" ");
        }
        for (int k = 1; k <= 2*i-1; k ++)
        {
            printf("*");
        }
        printf("\n");
    }  

    for (int a = 1; a <= N; a++)
    {
        for (int b = 1; b <= a-1; b++)
        {
            printf(" ");
        }
        for (int c =2*N+1-2*a; c >=1 ;c--)
        {
            printf("*");
        }
        printf("\n");
    }


}