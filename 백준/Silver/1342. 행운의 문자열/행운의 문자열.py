def DFS(K, P):
    global result
    
    if K == 0:
        result += 1
        return
        
    for i in range(26):
        if alph[i] > 0 and i != P:
            alph[i] -= 1
            DFS(K - 1, i)
            alph[i] += 1

            
S = list(input())
N = len(S)

result = 0
alph = [0] * 26

for i in range(N):
    alph[ord(S[i]) - 97] += 1
    
DFS(N, -1)
print(result)