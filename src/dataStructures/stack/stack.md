# Stack

## How does it work ?

First in last out and last in first out.

## Time complexity

| OPERATION | BEST TIME COMPLEXITY | WORST TIME COMPLEXITY | AVERAGE TIME COMPLEXITY | SPACE COMPLEXITY |
| --------- | -------------------- | --------------------- | ----------------------- | ---------------- |
| Push      | O(1)                 | O(N)                  | O(1)                    | O(1)             |
| Pop       | O(1)                 | O(1)                  | O(1)                    | O(1)             |
| Peek      | O(1)                 | O(1)                  | O(1)                    | O(1)             |

## Functions

##### push(): any

When we insert an element in a stack then the operation is known as a push. If the stack is full then the overflow condition occurs.

##### pop(): any

When we delete an element from the stack, the operation is known as a pop. If the stack is empty means that no element exists in the stack, this state is known as an underflow state.

##### isEmpty(): boolean

It determines whether the stack is empty or not.

##### peek(): any

It returns the element at the given position.

##### display(): array

It prints all the elements available in the stack.
