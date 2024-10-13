#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){
    int c;
    int n, m;
    scanf("%d", &c);
    for (int i = 0; i< c; i++)
    {
        scanf("%d %d", &n, &m);
        int importance[n];
        memset(importance, 0, sizeof(importance));
        int max = 0;
        int ans = 1;
        int front = 0;
        for (int i = 0; i < n; i++){
            scanf("%d", &importance[i]);
        }
        while(1)
        {
            for (int j = 0; j < n; j++){
                if(importance[j] > max)
                    max = importance[j];
            }

            while (importance[front] != max){
                front = (front+1)%n;
            }
            if (front == m)
                break;
            
            importance[front] = 0;
            front = (front+1)%n;
            max = 0;
            ans++;

        }
        printf("%d\n",ans);
    }
    return 0;

}