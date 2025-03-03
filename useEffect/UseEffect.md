# 1 No dependency passed
useEffect(() => {
  //Runs on every render
});

# 2 An empty array
useEffect(() => {
  //Runs only on the first render
}, []);

# 3 Props or state values
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);

## Effect Cleanup
Some effects require cleanup to reduce memory leaks.

Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

We do this by including a return function at the end of the useEffect Hook.