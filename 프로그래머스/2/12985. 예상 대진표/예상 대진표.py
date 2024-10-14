def solution(n,a,b):
    tmp = n
    cnt = -1
    while tmp > 0 :
        cnt+=1
        tmp //= 2
    key = n//2
    change = n//2
    while True :
        if (a > key and b <= key) or (a <= key and b > key) :
            return cnt
        else :
            if (a > key and b > key) :
                change //=2
                key += change
                cnt -=1

            else :
                change //=2
                key -= change
                cnt -=1
    return