#include <stdio.h>

int main(void)
{
    int a[100][100] = {0};
    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i ++)
    {
        int x, y, x_, y_;
        scanf("%d %d", &x_, &y_);
        for (x = x_; x < x_+10; x++)
        {
            for (y = y_; y<y_+10; y++)
            {
                a[x][y] = 1;
            }
        }
    }
    int count = 0;
    for (int i =0; i < 100; i ++)
    {
        for (int j = 0; j < 100; j++)
        {
            if (a[i][j] ==1)
            {
                count++;
            }
        }
    }

    printf("%d", count);

}