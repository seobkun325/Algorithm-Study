#include <stdio.h>

int main(void)
{
    int  N;
    scanf("%d", &N);
    for (int i = 1; i <= N; i ++)
    {
        for (int j = N-i+1; j > 1; j--)
        {
            printf(" ");
        }
        for (int k = 0; k < i; k ++)
        {
            printf("*");
        }
        printf("\n");
    }

    return 0;
}