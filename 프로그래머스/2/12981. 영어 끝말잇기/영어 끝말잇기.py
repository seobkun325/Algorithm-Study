def solution(n, words):
    answer = [0,0]
    checklist = []
    for i in range(len(words)) :
        if words[i] not in checklist :
            checklist.append(words[i])
        else :
            return [i%n + 1, i//n +1]
        if len(checklist) > 1 :
            if checklist[-1][0] != checklist[-2][-1] :
                a, b = len(checklist)%n, len(checklist)//n + 1
                if a == 0 :
                    a += n
                if len(checklist) % n == 0 :
                    b -= 1
                return [a,b]
                
    return answer