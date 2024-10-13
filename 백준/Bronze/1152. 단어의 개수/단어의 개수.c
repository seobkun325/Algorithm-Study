#include <stdio.h>

int main(void)
{
    char str[1000001];
    fgets(str, sizeof(str), stdin);
    int count = 0;
    int is_word_started = 0;  // 단어 시작 여부를 체크하는 변수

    for (int i = 0; str[i] != '\0'; i++)
    {
        if (str[i] == ' ' || str[i] == '\n')
        {
            // 띄어쓰기나 개행 문자를 만나면 단어가 끝난 것이므로 상태를 변경
            is_word_started = 0;
        }
        else
        {
            // 띄어쓰기나 개행 문자 이외의 문자를 만나면 단어가 시작됨을 체크
            if (!is_word_started)
            {
                is_word_started = 1;
                count++;
            }
        }
    }

    printf("%d", count);

    return 0;
}
