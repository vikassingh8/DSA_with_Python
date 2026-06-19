# __init is costructor
# self is this
# attribute is varible like fname ,lname










# class UserName:
#     def __init__(self,first_name,last_name):
#         self.fName=first_name
#         self.lName=last_name
#     def FullName(self):
#         print(f"{self.fName} {self.lName}")


# result= UserName("vikas","singh")
# result.FullName()









# inharitence

# class userDetail(UserName):
#     def __init__(self,first_name,last_name,age):
#         super().__init__(first_name,last_name)
#         self.age=age


# userResult=userDetail("vikas","singh",56)
# userResult.FullName()









# encapsulation

# class Car:
#     def __init__(self,model,price):
#         self.model=model
#         self.__price=price              #prive variable / attribute

#     def get_dtail(self):
#         return f"the price of car is {self.__price}"

# resul=Car("hero",450)
# print(resul.__price)





# polymorphism          same function name but different result


# class UserName:
#     def __init__(self, first_name, last_name):
#         self.fName = first_name
#         self.lName = last_name

#     def FullName(self):
#         print(f"{self.fName} {self.lName}")

#     def poly(self):
#         return self.fName


# class userDetail(UserName):
#     def __init__(self, first_name, last_name, age):
#         super().__init__(first_name, last_name)
#         self.age = age

#     def poly(self):
#         return self.age


# names=UserName("vikas","singh")
# details=userDetail("litil","king",78)
# print(names.poly())
# print(details.poly())




# class variables



class Students():
    total_students=0
    def __init__(self,name):
        self.name=name
        Students.total_students+=1



Students("vikas")
Students("himanshu")
print(Students.total_students)
    
