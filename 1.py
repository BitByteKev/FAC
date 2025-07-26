# def countdown(n):
#     while n > 0:
#         print(n)
#         n -= 1
#     print("Blastoff!")
    
# def countdown(n):
#     if n == 0:
#         print("Blastoff!")
#         return
#     print(n)
#     countdown(n - 1)  # Function calls itself with a smaller value
    
# countdown(73)

# def mystery(n):
#     if n <= 0:
#         return 1
#     return n * mystery(n - 2)
# print(mystery(5))

def fib(n):
    if n == 0: 
        return 0
    if n == 1:
        return 1
    else: 
        return fib(n-1) + fib(n-2)

print(fib(10))