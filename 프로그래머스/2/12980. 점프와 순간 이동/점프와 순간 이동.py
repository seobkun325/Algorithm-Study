def solution(n):
    ans = 0
    # 점프(+K)는 배터리 K 소모
    # 순간이동(누적거리 x 2) 배터리 소모 x
    tmp = n
    while tmp > 1 :
        if tmp % 2 == 0 :
            tmp //= 2
        else :
            tmp -= 1
            tmp //= 2
            ans += 1
        if tmp == 1 :
            break
    return ans+1
