#include <stdio.h>

int main(void)
{
    int t, n, k;
    scanf("%d", &t);
    for(int i = 0; i < t; i++)
    {
        scanf("%d %d", &k, &n);
        long long npac = n, kpac = 1; // 초기값 수정
        if (n == k)
        {
            printf("1\n");
        }
        else
        {
            if(k*2 > n)
            {
                k = n-k;
            }
            for (int a = n-1; a > n-k; a--) // 범위 수정
            {
                npac = npac * a;
            }
            for (int b = 1; b < k+1; b++)
            {
                kpac = kpac * b;
            }
            printf("%lld\n", npac / kpac);
        }
    }

    return 0;
}
