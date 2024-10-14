def solution(n):
    answer = 0
    start = 1
    end = 1
    cur_sum = 1
    while start <= n//2 :
        if cur_sum == n :
            answer += 1
            cur_sum -= start
            start += 1
        elif cur_sum < n :
            end += 1
            cur_sum += end
        elif cur_sum > n :
            cur_sum -= start
            start += 1
    return answer + 1