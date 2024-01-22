## Types of Tests
- Unit Testing - testing a single class
- Component Testing - testing a subsystem
- Integration Testing - testing multiple classes
- Regression Testing - testing that future changes don't break the system
- System Testing - testing the entire system including hardware performance, security, etc.

| Black Box    | Gray Box       | White Box      |
| ------------ | -------------- | -------------- |
| no knowledge | some knowledge | full knowledge | 

### Test Driven Development
- Test before you code
- Don't write production code
- Only write enough of a unit test to fail
### Statistical Analysis
- Sample data
### Boundary Analysis
- Test edge cases and bad data
### Structured Basis Testing
- Analyze each branch taken by the code
### Mutant Analysis
- Take actual code, introduce bugs
- Run tests
- If all tests still pass, add more tests