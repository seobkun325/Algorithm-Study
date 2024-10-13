#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define max 1000

int main()
{
    int n;
    scanf("%d",&n);
    int arr[max];
    memset(arr,0,sizeof(arr));
    int now = -1;
    for (int i = 1; i <= n; i++)
    {
        int count = i+1;
        while(count>0)
        {
            now = (now+1)%n;
            if(arr[now] == 0)
            {
                count--;
            }
            
        }
        arr[now] = i;

    }
    for( int i = 0; i < n;i++)
        printf("%d ",arr[i]);

    return 0;

    
}