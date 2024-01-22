>[!tip] Use manpages

Talked more about [[Unix]], including [[Shell|Shells]] and redirection/piping
## Redirection exercises 
```sh
ls -l | more
# equals
ls -l > tmp
more < tmp
```

```sh
cat foo | sort | head
# equals??
sort < foo > tmp
head < tmp
```

Started review of C and file linking
