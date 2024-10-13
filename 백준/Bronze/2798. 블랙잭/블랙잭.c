#include <stdio.h>

int main()
{
    int n, m;
    scanf("%d %d",&n, &m);
    int card[n];
    int max = -1;
    int a, b, c;
    for (int i = 0; i < n; i++)
        scanf("%d",&card[i]);
    
    for (int i = 0; i < n-2; i++)
    {
        for (int j = i+1; j < n-1; j++)
        {
            for (int k = j+1; k < n; k++)
            {
                int sum = card[i]+card[j]+card[k];
                if(sum < m)
                {
                    if(sum > max)
                    {
                        max = sum;
                    }
                }
                else if (sum == m)
                {
                    max = sum;
                }
                else
                    continue;
            }
        }
    }
    printf("%d", max);

}