# DataType Output: str 
x = "Hello World"

# DataType Output: int 
x = 50

# DataType Output: float 
x = 60.5

# DataType Output: complex 
x = 3j

# DataType Output: list 
x = ["geeks", "for", "geeks"] 

# DataType Output: tuple 
x = ("geeks", "for", "geeks") 

# DataType Output: range 
x = range(10) 

# DataType Output: dict 
x = {"name": "Suraj", "age": 24} 

# DataType Output: set 
x = {"geeks", "for", "geeks"} 

# DataType Output: frozenset 
x = frozenset({"geeks", "for", "geeks"}) 

# DataType Output: bool 
x = True

# DataType Output: bytes 
x = b"Geeks"

# DataType Output: bytearray 
x = bytearray(4) 

# DataType Output: memoryview 
x = memoryview(bytes(6)) 

# DataType Output: NoneType 
x = None
# ends the output with a space 
print("Welcome to", end=' ') 
print("GeeksforGeeks", end=' ') 
# code for disabling the softspace feature 
print('09', '12', '2016', sep='-') 

# another example 
print('Example', 'geeksforgeeks', sep='@') 
# Python program showing 
# a use of input() 

val = input("Enter your value: ") 
print(val)
# Examples of Relational Operators 
a = 13
b = 33

# a > b is False 
print(a > b) 

# a < b is True 
print(a < b) 

# a == b is False 
print(a == b) 

# a != b is True 
print(a != b) 

# a >= b is False 
print(a >= b) 

# a <= b is True 
print(a <= b) 
# Examples of Logical Operator 
a = True
b = False

# Print a and b is False 
print(a and b) 

# Print a or b is True 
print(a or b) 

# Print not a is False 
print(not a) 
# Examples of Bitwise operators 
a = 10
b = 4

# Print bitwise AND operation 
print(a & b) 

# Print bitwise OR operation 
print(a | b) 

# Print bitwise NOT operation 
print(~a) 

# print bitwise XOR operation 
print(a ^ b) 

# print bitwise right shift operation 
print(a >> 2) 

# print bitwise left shift operation 
print(a << 2) 
# Creating a String 
String1 = "GeeksForGeeks"
print("Initial String: ") 
print(String1) 

# Printing 3rd character 
print("\nSlicing characters from 3-12: ") 
print(String1[3]) 

# Printing characters between 
# 3rd and 2nd last character 
print("\nSlicing characters between " +
	"3rd and 2nd last character: ") 
print(String1[3:-2]) 
# python program to illustrate If else statement 

i = 20
if (i < 15): 
	print("i is smaller than 15") 
else: 
	print("i is greater than 15") 
print("i'm not in if and not in else Block") 
# Python program to illustrate 
# Iterating over a list 
l = ["geeks", "for", "geeks"] 

for i in l: 
	print(i) 
# Python program to illustrate 
# while loop 
count = 0
while (count < 3): 
	count = count + 1
	print("Hello Geek") 
Var = ["Geeks", "for", "Geeks"] 
print(Var) 
# Using list comprehension to iterate through loop 
List = [character for character in [1, 2, 3]] 

# Displaying list 
print(List) 
#dictionary
Dict = {1: 'Geeks', 2: 'For', 3: 'Geeks'} 
print(Dict) 
# Lists to represent keys and values 
keys = ['a','b','c','d','e'] 
values = [1,2,3,4,5] 

# but this line shows dict comprehension here 
myDict = { k:v for (k,v) in zip(keys, values)} 

# We can use below too 
# myDict = dict(zip(keys, values)) 

print (myDict) 
#unorderedset
var = {"Geeks", "for", "Geeks"} 
print(var) 
# A simple Python function 
def fun(): 
	print("Welcome to GFG") 

# Driver code to call a function 
fun() 
# A simple Python function to check 
# whether x is even or odd 
def evenOdd(x): 
	if (x % 2 == 0): 
		print("even") 
	else: 
		print("odd") 


# Driver code to call the function 
evenOdd(2) 
evenOdd(3) 
#range function
# print first 5 integers 
#try expect
# using python range() function 
for i in range(5): 
	print(i, end=" ") 
print() 
a = [1, 2, 3] 
try: 
	print ("Second element = %d" %(a[1])) 

	# Throws error since there are only 3 elements in array 
	print ("Fourth element = %d" %(a[3])) 

except: 
	print ("An error occurred") 
#args kwargs

# Now we can use *args or **kwargs to 
# pass arguments to this function : 
args = ("Geeks", "for", "Geeks") 
myFun(*args) 

kwargs = {"arg1": "Geeks", "arg2": "for", "arg3": "Geeks"} 
myFun(**kwargs) 
#lombda py
calc = lambda num: "Even number" if num % 2 == 0 else "Odd number"

print(calc(20)) 
#reduced func
from functools import reduce

nums = [1, 2, 3, 4] 
ans = reduce(lambda x, y: x + y, nums) 
print(ans)
#filter func
# function that filters vowels 
def fun(variable): 
	letters = ['a', 'e', 'i', 'o', 'u'] 
	if (variable in letters): 
		return True
	else: 
		return False


# sequence 
sequence = ['g', 'e', 'e', 'j', 'k', 's', 'p', 'r'] 

# using filter function 
filtered = filter(fun, sequence) 

print('The filtered letters are:') 
for s in filtered: 
	print(s) 
#map func
	# Return double of n 
def addition(n): 
	return n + n 

# We double all numbers using map() 
numbers = (1, 2, 3, 4) 
result = map(addition, numbers) 
print(list(result)) 
