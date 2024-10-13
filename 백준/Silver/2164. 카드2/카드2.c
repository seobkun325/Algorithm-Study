#include <stdio.h>
#define max 500000
int main()
{
    int n, i, front = 0, rear;
    int card[max];
    scanf("%d",&n);

    for (i = 0; i < n; i++)
    {
        card[i] = i+1;
    }

    rear = n-1;

    while(1)
    {
        front = (front+1)%n;
        if (rear == front)
            break;
        rear = (rear+1)%n;
        card[rear] = card[front];
        front = (front+1)%n;
        if(rear == front)
            break;
    }
    printf("%d", card[rear]);
    return 0;
}