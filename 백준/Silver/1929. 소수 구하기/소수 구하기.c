#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main()
{
    int m, n;
    int tf;
    scanf("%d %d",&m, &n);
    for (int i = m; i <= n; i++)
    {
        tf = 1;
        if (i <= 1)
        {
            tf = 0;
        }
        else
        {
            for (int j = 2; j*j <= i; j++)
            {
                if(i % j == 0)
                {
                    tf = 0;
                    break;
                }

            }

        }
        if(tf == 1)
        {
            printf("%d\n",i);
        }
    }

    return 0;
    
    
}