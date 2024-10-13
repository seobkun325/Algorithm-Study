t = int(input())
for _ in range(t) :
    arr = list((input().split()))
    n = int(arr[0])
    sen = arr[1]
    for i in range(len(sen)) :
        for _ in range(n) :
            print(sen[i],end="")
    print()