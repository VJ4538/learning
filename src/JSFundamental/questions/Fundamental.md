## Different types of array loops in javaScript

### for

- Can use break key word to break out of the loop

```
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}
```

### while

```
let i = 0;
while (i<10) {
  i++
  // i will increment to 9 and break the loop
}
```

### forEach

- Does not return a value.
- You can't not use the break key word to break out of the loop

```
const a = [1, 2, 3];
const doubled = a.forEach((num, index) => {
  // Do something with num and/or index.
});

// doubled = undefined
```

### map

- Returns a value
- Mainly used in react

```
const a = [1, 2, 3];
const doubled = a.map((num) => {
  return num * 2;
});

// doubled = [2, 4, 6]
```
