#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){
    int n, m;
    scanf("%d %d",&n, &m);
    int arr[n][m];
    memset(arr,0,sizeof(arr));
    for (int i = 0; i< n; i++)
    {
        for (int j = 0; j< m; j++)
        {
            scanf("%d",&arr[i][j]);
        }
    }
    int k;
    scanf("%d",&k);
    while(k--){
        int i, j, x, y;
        scanf("%d %d %d %d", &i,&j,&x,&y);
        int sum = 0;
        for (int a= i-1; a<= x-1; a++){
            for (int b = j-1; b <= y-1; b++){
                sum += arr[a][b];
            }
        }
        printf("%d\n",sum);
        
    }
    return 0;
}