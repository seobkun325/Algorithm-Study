#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    int n;
    scanf("%d",&n);
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    int now = 0;
    int non=n;
    while(non>1)
    {
        printf("%d ", now+1);
        int pop = arr[now];
        arr[now] = 0;
        if (pop > 0)
        {
            int count = pop;
            while(count)
            {   
                now = (now+1)%n;
                if(arr[now] != 0)
                    count--;
            }
        }
        else
        {
            int count = 0-pop;
            while(count)
            {   
                now = (now-1+n)%n;
                if(arr[now] != 0)
                    count--;

            }
        }
        non--;
    }
    printf("%d",now+1);
    
    return 0;


}