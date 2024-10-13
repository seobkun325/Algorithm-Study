#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main()
{
    int num1, num2;
    scanf("%d %d",&num1, &num2);
    if (num1 > num2)
    {
        int a = num1;
        num1 = num2;
        num2 = a;
    }

    for (int i = num1; i > 0; i--)
    {
        if((num1 % i == 0) && (num2 % i == 0))
        {
            printf("%d\n", i);
            int k = num1 * num2 / i;
            printf("%d", k);
            break;
        }
    }
    return 0;

}