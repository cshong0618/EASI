# EASI
## Introduction
EASI stands for Easy API Specification Implementation-er and it is an example rather than a library on how to programmatically parse specification files into Express middlewares.  

The flow of the program from the start to listening to ports is as follows,

1. Require all needed libraries
2. Define all constants
3. Load specification into memory
4. Load controllers into memory
5. Match route and methods to respective controller methods
6. Use tools middlewares
7. Use router middleware with base path (optional).
8. Use error handling middleware. (If needed)
9. Listen to port and go live!