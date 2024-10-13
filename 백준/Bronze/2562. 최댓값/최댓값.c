#include <stdio.h>

int main(void)
{
    int arr[9], max, st = 1;
    for (int i = 0; i < 9; i++)
    {
        scanf("%d", &arr[i]);
    }
    max = arr[0];
    for (int j = 0; j < 9; j++)
    {
        if (arr[j] > max)
        {
            max = arr[j];
            st = j+1;
        }
    }
    printf("%d\n%d",max,st);
}
