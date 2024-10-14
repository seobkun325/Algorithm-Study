def solution(progresses, speeds):
    answer = []
    progresses.append(-1)
    speeds.append(-1)
    pro = []
    sp = []
    for i in range (len(progresses)-1,-1,-1) :
        pro.append(progresses[i])
        sp.append(speeds[i])
    while len(pro) > 1 :
        cnt = 0
        for i in range (len(pro)) :
            pro[i] += sp[i]
        while pro[-1] >= 100 :
            pro.pop()
            sp.pop()
            cnt +=1
        if cnt :
            answer.append(cnt)
        
    return answer