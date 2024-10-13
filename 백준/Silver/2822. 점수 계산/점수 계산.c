#include <stdio.h>

void array(int score[8])
{
    for (int i = 0; i < 7; i ++)
    {
        for (int j = 0; j < 7-i; j++)
        if (score[j] > score[j+1])
        {
            int temp = score[j+1];
            score[j+1] = score[j];
            score[j] = temp;
        }
    }

}

int main(void)
{
    int score[8];
    int born[151] = {0};
    for (int i = 0; i < 8; i++)
    {
        scanf("%d", &score[i]);
        born[score[i]] = i+1;
    }
    
    array(score);
    int sum = 0;
    for (int i = 3; i < 8; i++)
    {
        sum += score[i];
    }

    printf("%d\n", sum);
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 4-i; j++)
        {
            if (born[score[j+3]] > born[score[j+4]])
            {
                int temp = born[score[j+4]];
                born[score[j+4]] = born[score[j+3]];
                born[score[j+3]] = temp;
            }
        }
    }
    for (int i = 3; i < 8; i++)
    {
        printf("%d ", born[score[i]]);
    }
    return 0;
}