POSIX [[Thread|Threads]] Package
Library calls for creating and managing threads
Implementation is dependent on system support
- Could be user/kernel level

```c
int pthread_create(pthread_t* thread, pthread_attr_t* attr, void* function, void* arg);

int pthread_join(pthread_t thread, void **value_ptr);

int pthread_detach(pthread_t thread);
```