#include <stdio.h>
int select(int a, int b)
{
    if(a > b)
        return a;
    else
        return b;
}

int main()
{
    int n;
    scanf("%d", &n);
    int arr[n][n];
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j <= i; j++)
            {
                scanf("%d", &arr[i][j]);
                if(i>0)
                {
                    if(j == 0)
                        arr[i][j] += arr[i-1][j];
                    else if(j == i)
                        arr[i][j] += arr[i-1][j-1];
                    else
                    {
                        arr[i][j] = select(arr[i-1][j-1], arr[i-1][j])+ arr[i][j];
                    }
                }

            }
    }
    int max = 0;
    for (int j = 0; j <= n; j++)
    {
        
        if (arr[n-1][j] > max)
            max = arr[n-1][j];
    }
    printf("%d", max);
}