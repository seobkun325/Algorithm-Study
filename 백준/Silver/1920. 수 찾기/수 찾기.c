#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>
int arrN[100000];
int arrM[100000];
int ans[100000];


// 이진 탐색 트리
int binary_search_tree(int arr[], int key, int size) {
  int front=0, rear=size-1, pivot;

  while(1) {
    pivot = (front +rear) / 2;
    if (arr[pivot] == key) return 1;
    if (arr[front] == key) return 1;
    if (arr[rear] == key) return 1;

    if (arr[pivot] < key) front = pivot + 1;
    else rear = pivot -1;

    if (front >= rear)
      return 0;
  }
}

// 큇 소트 비교함수
int cmp(const void* a, const void* b){
  return *(int*)a > *(int*)b ? 1 : (*(int*)a < *(int*)b ? - 1 : 0 );
}
int main(){
  int n, m;
  scanf("%d", &n);
  for (int i = 0 ; i< n; i++){
    scanf("%d", &arrN[i]);
  }
  scanf("%d", &m);
  for (int i = 0; i < m; i++){
    scanf("%d", &arrM[i]);
  }
  qsort(arrN, n, sizeof(int), cmp);
  for (int i = 0; i < m; i++){
    printf("%d\n", binary_search_tree(arrN, arrM[i], n));
  }
  return 0;
}