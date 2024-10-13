#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main()
{
    int n, m;
    scanf("%d %d", &n, &m);
    char arr[n+1][m+1];
    for (int i = 0; i < n ; i++)
    {
        scanf("%s",arr[i]);
    }
    int count = 0;
    for (int i = 0; i < n; i++){
        for (int j = 0; j < m; j++){
            if(arr[i][j] == '-')
            {
                if(arr[i][j+1] != '-')
                    count++;
            }
        }
    }
    int cnt=0;
    for (int j = 0; j < m; j++){
        for (int i = 0; i < n; i++){
            if(arr[i][j] == '|')
            {
                if(arr[i+1][j] != '|')
                    cnt++;
            }
        }
    }

    printf("%d",count+cnt);
    return 0;


}