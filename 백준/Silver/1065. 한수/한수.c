#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){
    int num;
    scanf("%d", &num);
    int cnt = 0;
    int jari1, jari2,jari3;
    // 한자리, 두자리
    if(num < 100)
        cnt  = num;
    else
        cnt = 99;

    // 세자리
    if (num >= 100 && num < 1000){
        for(int i = 100; i <= num; i++){
            jari1 = i / 100;
            jari2 = (i % 100) / 10;
            jari3 = (i % 100) % 10;
            
            if(jari1 - jari2 == jari2 - jari3)
            {
                cnt++;
            }
        }
    }
    if (num == 1000)
        cnt = 144;

    printf("%d\n", cnt);
    return 0;



}
