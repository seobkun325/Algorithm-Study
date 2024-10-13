name = input()
n = int(input())
idx = 0
lst = []

for _ in range (n) :
    current = 0
    L = O = V = E = 0
    for x in name :
        if x == 'L' :
            L += 1
        elif x == 'O' :
            O += 1
        elif x == 'V' :
            V += 1
        elif x == 'E' :
            E += 1
    team = input()
    for x in team :
        if x == 'L' :
            L += 1
        elif x == 'O' :
            O += 1
        elif x == 'V' :
            V += 1
        elif x == 'E' :
            E += 1
    current = ((L+O)*(L+V)*(L+E)*(O+V)*(O+E)*(V+E)) % 100
    lst.append((team, current))
    idx+=1
lst.sort(key = lambda x: (-x[1],x[0]))
print(lst[0][0])
    