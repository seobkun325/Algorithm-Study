#include <stdio.h>

int main(void)
{
    char str[103];
    int count = 0;
    fgets(str, sizeof(str), stdin);
    for (int i = 0; i < 101; i++)
    {
        if(str[count] != '\0')
        {
            count++;
        }
        else
        {
            break;
        }
    }
    printf("%d", count-1);
    return 0;
}