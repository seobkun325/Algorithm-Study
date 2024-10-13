#include <stdio.h>

int main(void)
{
    long long s;
    scanf("%lld", &s);
    long long sum = 0;
    int count = 0;
    for (long long i = 1; i < 4294967295; i++)
    {
        if(sum < s)
        {
            sum = sum+i;
            count++;
        }
        else if (sum == s)
        {
            break;
        }
        else
        {
            count = count -1;
            break;
        }

    }
    printf("%d",count);

    return 0;


}