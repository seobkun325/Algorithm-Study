#include <stdio.h>
#include <stdlib.h>
#include <string.h>

long long sum(long long a, long long b){
    long long sum = a + b;
    return sum;
}

int main(){
    long long n;
    long long arr[100];
    arr[0] = 0;
    arr[1] = 1;
    scanf("%lld",&n);
    int i = 0;
    for (int i = 0; i<= n; i++)
    {
        arr[i+2] = sum(arr[i], arr[i+1]);
    }

    printf("%lld ", arr[n]);

    return 0;
}