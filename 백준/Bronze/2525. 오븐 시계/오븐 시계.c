#include <stdio.h>

int main(void)
{
    int a, b, d, da, db, upa;
    scanf("%d %d", &a, &b);
    scanf("%d", &d);

    db = b + d;
    upa = db / 60;
    da = a + upa;
    if (da > 23)
    {
        da = da - 24;
        db = db - 60*upa;
        printf("%d %d", da, db);
    }
    else
    {
        db = db - 60*upa;
        printf("%d %d", da ,db);

    }

    return 0;
}