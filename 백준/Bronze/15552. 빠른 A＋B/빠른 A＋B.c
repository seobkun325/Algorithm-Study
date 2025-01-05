#include <stdio.h>

int main(void)
{
    int T, a, b;
    scanf("%d", &T);
    int ans[T];
    for (int i = 0; i < T; i ++)
    {
        scanf("%d %d", &a, &b);
        ans[i] = a+b;
    }
    for (int i = 0; i < T; i ++)
    {
        printf("%d\n", ans[i]);
    }

    return 0;
}