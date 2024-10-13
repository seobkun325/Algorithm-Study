#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    int n;
    scanf("%d", &n);
    int arr[n+1];
    memset(arr,0,sizeof(int));
    int max_index = 0;

    for (int i = 1; i <= n; i++)
    {
        scanf("%d", &arr[i]);
    }

    int count = arr[1];
    while (1){
        int max = 0;
        for (int i = 2; i <= n; i++)
        {
            
            if (arr[i] >= max)
            {   
                max = arr[i];
                max_index = i;
            }
            
        }

        if(arr[1] <= max)
        {
            arr[max_index] -= 1;
            arr[1]++;
        }
        else
            break;
    }
    int ans = arr[1] - count;
    printf("%d", ans);
    return 0;

    
}