#include <stdio.h>
#include <stdlib.h>
#define size 10000

typedef struct Queue{
    int data[size];
    int front;
    int rear;
}Queue;

void init(Queue *s){
    s->front = -1;
    s->rear = -1;
}
void push(Queue *s, int x){
    s->rear++;
    s->data[s->rear] = x;
}

int pop(Queue *s){
    s->front++;
    return s->data[s->front];
}

void move(Queue *s){
    s->rear++;
    s->front++;
    s->data[s->rear] = s->data[s->front];

}


int main(){
    Queue s;
    init(&s);
    int n;
    scanf("%d",&n);
    for (int i = 1; i <= n; i++)
        push(&s,i);
    
    while(n--){
        int k;
        k = pop(&s);
        printf("%d ",k);
        move(&s);
    }

    return 0;

}
