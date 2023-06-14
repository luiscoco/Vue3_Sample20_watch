# watch-sample

In Vue 3, the watchEffect and watch functions are used for reactive programming and are part of the Composition API.

## watchEffect:
The watchEffect function allows you to perform side effects based on reactive dependencies. It automatically tracks the reactive dependencies used inside its callback function and re-runs the function whenever any of those dependencies change. This is similar to the created or mounted lifecycle hooks in Vue 2, but with more flexibility.
Here's an example of how watchEffect is used:

```typescript
import { watchEffect, reactive } from 'vue';

const state = reactive({
  count: 0,
});

watchEffect(() => {
  console.log('Count changed:', state.count);
});
```

In this example, the callback function inside watchEffect is executed initially and whenever the state.count value changes. If the state.count changes from 0 to 1, the console will log 'Count changed: 1'.

## watch:
The watch function allows you to watch for specific reactive dependencies and execute a callback function when those dependencies change. Unlike watchEffect, watch gives you more fine-grained control over when and how the callback is executed.
Here's an example of how watch is used:

```typescript
import { watch, reactive } from 'vue';

const state = reactive({
  count: 0,
});

watch(
  () => state.count,
  (newCount, oldCount) => {
    console.log('Count changed:', newCount, 'Old count:', oldCount);
  }
);
```

In this example, the first argument of watch is a function that returns the value you want to watch (in this case, state.count). The second argument is the callback function that is executed whenever state.count changes. It receives two parameters: newCount (the new value) and oldCount (the previous value).

Both watchEffect and watch are powerful tools in Vue 3 that allow you to reactively respond to changes in data and perform side effects accordingly.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
