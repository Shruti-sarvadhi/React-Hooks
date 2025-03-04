Optimized Parent-Child State Updates with useMemo

click on buttons one by one and see the behavior, you will see now whenever we change parent state no child is rendering this is because parent state is not using by ant of the childs and 
when we update child1 only parent and child1 get’s rendered because only parent and child1 components has child1 state. Same with the Child2. it happens when we don't use useMemo

