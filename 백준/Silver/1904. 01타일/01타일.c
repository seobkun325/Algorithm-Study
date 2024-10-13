#include <stdio.h>

int main()
{
    int n;
    scanf("%d",&n);
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        if(i == 0)
            arr[i] = 1;
        else if(i == 1)
            arr[i] = 2;
        else
            arr[i] = (arr[i-1]+arr[i-2])%15746;
    }
    printf("%d",arr[n-1]);
    return 0;
}