#include <stdio.h>
#include <string.h>

int arr[50][50], m, n;

void dfs(int x, int y)
{
    arr[x][y] = 0;

    if(x+1 < m && arr[x+1][y] == 1)
        dfs(x+1,y);
    if(x-1 >= 0 && arr[x-1][y] == 1)
        dfs(x-1,y);
    if(y+1 < n && arr[x][y+1] == 1)
        dfs(x,y+1);
    if(y-1 >= 0 && arr[x][y-1] == 1)
        dfs(x,y-1);

}

int main()
{
    int t;
    scanf("%d",&t);
    while(t--)
    {
        int k,x,y;
        scanf("%d %d %d",&m,&n,&k);
        memset(arr,0,sizeof(arr));

        while(k--)
        {
            scanf("%d %d",&x,&y);
            arr[x][y] = 1;
        } 

        int cnt = 0;
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j <n; j++)
            {
                if (arr[i][j] == 1)
                {
                    dfs(i,j);
                    cnt++;
                }
            }
        }
        printf("%d\n",cnt);

    }
    return 0;
}