from math import sqrt
x1, y1, x2, y2, x3, y3 = map(int, input().split(" "))
arr = [[x1, y1], [x2, y2], [x3, y3], [x1, y1]]
lenlist = []
for i in range (3) :
    len = sqrt((arr[i][0]-arr[i+1][0])**2 + (arr[i][1]-arr[i+1][1])**2)
    lenlist.append(len)
if (x1-x2)*(y2-y3) == (x2-x3)*(y1-y2) :
    print(-1.0)
else :
    print(2*(max(lenlist)-min(lenlist)))
