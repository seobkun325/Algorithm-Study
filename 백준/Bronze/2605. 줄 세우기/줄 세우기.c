#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int arr[100];
void swap(int *a, int *b){
        int k;
        k = *a;
        *a = *b;
        *b = k;
}

int main(){
    int n;
    scanf("%d",&n);
    int num;
    for(int i = 0; i < n;i++)
    {
        arr[i] = i+1;
        scanf("%d",&num);
        
        for(int j = i; j> i-num;j--){
            swap(&arr[j],&arr[j-1]);
        }

    }

    for(int i = 0; i < n; i++)
        printf("%d ",arr[i]);
    return 0;
}