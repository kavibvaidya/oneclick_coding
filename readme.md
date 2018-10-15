#This is the documentation for your coding challenge!

## Variables:

Variables in these files are named in the following fashion:
+ First there is an identification prefix: what is the variable used for? Note that this may
not be there every time.
+ Next we have the roman numeral corresponding to the Episode in question.
+ Finally we have a suffix corresponding to whether the product is a DVD
  (DVD) or a Blue-ray (BR)

## Functions

While all the functions are clearly named and commented on, here is a description of
them all:

+ The first function (change) updates the value in the number of items.

+ The second function (makeDiscountAndTotal) updates the discount and total columns.
I know this function is inefficient, but I found this to be the simplest way to avoid
some bugs.

+ The final function (sendorder) emulates what will happen in the backend. Namely,
either Piratical will send himself a mail, or store this in a database. Thus I have used
a download json format. Please note that I have used stack exchange for some part
of the automatic download system (the last 3-4 lines).
