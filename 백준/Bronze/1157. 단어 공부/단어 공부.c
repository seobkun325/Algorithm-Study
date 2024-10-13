#include <stdio.h>

int main(void)
{
    char str [1000001];
    int abc[27]={0};
    int ans = 0;
    scanf("%s", str);

    for (int i= 0; i < 1000001; i++)
    {
        if (str[i] == '\0')
        {
            break;
        }
        int k = str[i];
        if (k >= 97)
        {
         
            k -= 32;
        }
        k -= 65;
        abc[k]++;
    }



    int max = abc[0];

    int same = 0;
    for (int i = 1; i < 26; i++)
    {
        if (max == abc[i])
        {
            same = 1;
        }
        else
        {
            if (max <abc[i])
            {
                max = abc[i];
                same = 0;
                ans = i;
            }
        }


    }
    if (same == 1)
    {
        printf("?");
        return 0;
    }

    printf("%c", ans+65);
    

    return 0;
}