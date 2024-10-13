#include <stdio.h>

int main(void)
{
    int n;
    scanf("%d",&n);
    int A[n], B[n];
    int answer[n];
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &A[i]);
    }
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &B[i]);
    }
    for (int i = 0; i < n-1; i++)
    {
        for (int j = i+1; j<n; j++)
        {
            if(A[i] > A[j])
            {
                int temp;
                temp = A[i];
                A[i] = A[j];
                A[j] = temp;
            }
        }
    }
    for (int i = 0; i < n-1; i++)
    {
        for (int j = i+1; j<n; j++)
        {
            if(B[i] > B[j])
            {
                int temp;
                temp = B[i];
                B[i] = B[j];
                B[j] = temp;
            }
        }
    }

    int sum = 0;
    for (int i = 0; i < n; i++)
    {
        sum = sum + A[i]*B[n-1-i];
    }
    printf ("%d ",sum);

    return 0;
}