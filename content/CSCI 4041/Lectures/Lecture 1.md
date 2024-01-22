
Talked about what [[Algorithms]] are
### Goals
**Design solutions that are**
1. Correct
2. Reasonably efficient

**Methods**
1. Reduce problem
2. Design own solution

Typically index from 1 to n :(
Use pseudocode
* tends to modify values globally
**RAM model** (learn more??)
### Problems
**Example Problem:** Pairs of Student Names
Determine if there exists a pair of students with the same name in this classroom
**Better Problem**
Determine if a set of n students contains a pair of students with the same name
Goal of class is to solve these more general problems

**Potential Solution**
```
does_pair_exist(S):
	for i = 1 to S.size
		if i.name is in name_list
			return T
		add i.name to name_list
	return F
```

**Verification**
Inductive Hypothesis: When a set of k or fewer students has been examined,
1. if a pair exists in that set, algorithm returns true
2. if a pair doesn't exist in that set, loop continues searching

**New Example:** The Sorting Problem
Sort a collection of data from smallest to largest

Wrote pseudocode for [[Insertion Sort]]