#include<stdio.h>
#include<stdlib.h>
int c(const void*b,const void*a){
return(*(int*)a-*(int*)b);}
int main(){
int n;
scanf("%d",&n);
int r[n];
for (int i=0;i<n;i++)
    scanf("%d",&r[i]);
qsort(r,n,sizeof(int),c);
int m=0;
for (int i=1;i<=n;i++){
    int p=i*r[i-1];
    if (p>m)
        m=p;}
    printf("%d",m);
    return 0;}