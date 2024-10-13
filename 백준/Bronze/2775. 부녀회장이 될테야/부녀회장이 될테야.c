#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main()
{
    int testcase;
    scanf("%d",&testcase);
    while(testcase--)
    {
        int a, b;
        scanf("%d %d",&a,&b);
        int house[a+1][b+1];
        memset(house,0,sizeof(house));
        for (int i = 0; i <= b; i++)
        {
            house[0][i] = i;
        }

        for (int i = 1; i <= a; i ++)
        {
            for (int j = 1; j <= b; j++)
            {
                house[i][j] = house[i][j-1]+house[i-1][j];
            }
        }

        printf("%d\n", house[a][b]);
        
    }

    return 0;
}