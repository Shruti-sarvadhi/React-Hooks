Preventing Unnecessary Re-renders in Child Components

## In React, when a parent component re-renders, all child components also re-render, even if their props haven’t changed. This can cause performance issues in large applications.

## How useMemo Helps?
--> useMemo prevents expensive calculations inside child components.
--> React.memo prevents child components from re-rendering if their props haven’t changed.
