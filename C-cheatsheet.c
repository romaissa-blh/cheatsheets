/* C Programming Cheatsheet */

/* 1. Basic Structure of a C Program */
#include <stdio.h>  // Preprocessor directive to include standard input/output library

int main() {  // Main function - entry point of the program
    printf("Hello, World!\n");  // Print message to the screen
    return 0;  // Return 0 to indicate successful execution
}

/* 2. Variables and Data Types */
#include <stdio.h>

int main() {
    int a = 5;        // Integer variable
    float b = 3.14;   // Floating-point variable
    double c = 3.14159;  // Double precision floating-point
    char d = 'A';     // Character variable
    char str[] = "Hello";  // String (Array of characters)

    printf("Integer: %d\n", a);  // Print integer
    printf("Float: %.2f\n", b);  // Print float (2 decimal places)
    printf("Double: %.5f\n", c);  // Print double
    printf("Char: %c\n", d);  // Print character
    printf("String: %s\n", str);  // Print string
    return 0;
}

/* 3. Constants */
#include <stdio.h>

#define PI 3.14159  // Macro definition for a constant

int main() {
    printf("Value of PI: %.5f\n", PI);  // Use constant value
    return 0;
}

/* 4. Control Structures */

/* If-Else */
#include <stdio.h>

int main() {
    int num = 10;
    
    if (num > 0) {
        printf("Positive number\n");
    } else if (num == 0) {
        printf("Zero\n");
    } else {
        printf("Negative number\n");
    }
    
    return 0;
}

/* Switch-Case */
#include <stdio.h>

int main() {
    int day = 3;
    
    switch(day) {
        case 1: printf("Monday\n"); break;
        case 2: printf("Tuesday\n"); break;
        case 3: printf("Wednesday\n"); break;
        default: printf("Invalid day\n");
    }
    
    return 0;
}

/* 5. Loops */

/* For Loop */
#include <stdio.h>

int main() {
    for (int i = 0; i < 5; i++) {
        printf("Iteration: %d\n", i);
    }
    return 0;
}

/* While Loop */
#include <stdio.h>

int main() {
    int i = 0;
    while (i < 5) {
        printf("Iteration: %d\n", i);
        i++;
    }
    return 0;
}

/* Do-While Loop */
#include <stdio.h>

int main() {
    int i = 0;
    do {
        printf("Iteration: %d\n", i);
        i++;
    } while (i < 5);
    return 0;
}

/* 6. Functions */

/* Function Definition */
#include <stdio.h>

int add(int x, int y) {
    return x + y;
}

int main() {
    int result = add(3, 4);  // Function call
    printf("Sum: %d\n", result);
    return 0;
}

/* Recursion */
#include <stdio.h>

int factorial(int n) {
    if (n == 0) return 1;
    else return n * factorial(n - 1);
}

int main() {
    int result = factorial(5);  // Recursive function call
    printf("Factorial: %d\n", result);
    return 0;
}

/* 7. Arrays */

/* Array Declaration and Access */
#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};  // Array of integers
    printf("First element: %d\n", arr[0]);  // Access first element
    printf("Last element: %d\n", arr[4]);  // Access last element
    
    // Loop through array
    for (int i = 0; i < 5; i++) {
        printf("Element at index %d: %d\n", i, arr[i]);
    }
    
    return 0;
}

/* 8. Pointers */

/* Pointer Basics */
#include <stdio.h>

int main() {
    int num = 10;
    int *ptr = &num;  // Pointer to the variable 'num'
    
    printf("Value of num: %d\n", num);
    printf("Address of num: %p\n", (void*)&num);
    printf("Pointer points to value: %d\n", *ptr);  // Dereferencing pointer

    return 0;
}

/* 9. Structures */

/* Structure Declaration and Access */
#include <stdio.h>

struct Person {
    char name[50];
    int age;
};

int main() {
    struct Person p1 = {"Alice", 25};  // Initializing structure

    printf("Name: %s\n", p1.name);  // Accessing structure members
    printf("Age: %d\n", p1.age);
    
    return 0;
}

/* 10. File I/O */

/* Reading from and Writing to a File */
#include <stdio.h>

int main() {
    FILE *file = fopen("example.txt", "w");  // Open file in write mode
    if (file == NULL) {
        printf("Error opening file!\n");
        return 1;
    }
    
    fprintf(file, "Hello, file!\n");  // Write to file
    fclose(file);  // Close the file
    
    file = fopen("example.txt", "r");  // Open file in read mode
    if (file == NULL) {
        printf("Error opening file!\n");
        return 1;
    }
    
    char line[100];
    fgets(line, sizeof(line), file);  // Read from file
    printf("Read from file: %s", line);
    
    fclose(file);  // Close the file
    return 0;
}

/* 11. Dynamic Memory Allocation */

/* malloc, calloc, realloc, and free */
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr = (int*)malloc(5 * sizeof(int));  // Allocate memory for an array of 5 integers

    if (arr == NULL) {
        printf("Memory allocation failed!\n");
        return 1;
    }
    
    for (int i = 0; i < 5; i++) {
        arr[i] = i + 1;
    }
    
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);  // Print elements of the array
    }
    
    free(arr);  // Free the dynamically allocated memory
    return 0;
}

/* 12. Type Casting */

/* Implicit and Explicit Type Casting */
#include <stdio.h>

int main() {
    int a = 5;
    float b = 2.5;
    
    float result = a + b;  /
