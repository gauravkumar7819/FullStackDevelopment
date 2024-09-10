[import java.util.Scanner;

public class Main {
public static void main(String[] args) {
Scanner sc = new Scanner(System.in);

// Reading n, k, q
int n = sc.nextInt();
int k = sc.nextInt();
int q = sc.nextInt();

// Reading signs
int[] signs = new int[k + 1];
for (int i = 1; i <= k; i++) {
signs[i] = sc.nextInt();
}

// Reading times
int[] times = new int[k + 1];
for (int i = 1; i <= k; i++) {
times[i] = sc.nextInt();
}

// Process each query
for (int i = 0; i < q; i++) {
int cur = sc.nextInt();

int L = 0;
int R = k;
int ind = (L + R) / 2;
while (L < R) {
if (cur == signs[ind]) {
L = ind;
R = ind;
} else if (cur < signs[ind]) {
R = ind - 1;
} else {
L = ind;
}
ind = (L + R) / 2 + 1;
}

int ans;
if (L == k) {
ans = times[L];
} else {
ans = times[L] + ((cur - signs[L]) * (times[L + 1] - times[L])) / (signs[L + 1] - signs[L]);
}

System.out.print(ans + " ");
}

System.out.println();
sc.close();
}
}]