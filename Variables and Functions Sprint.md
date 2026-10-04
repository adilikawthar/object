# 🚀 JavaScript Fundamentals Sprint
## Variables & Functions Practice Exercises

---

## Welcome to Your Practice Sprint!

This sprint contains hands-on exercises to reinforce what you learned in the lecture. You'll practice creating variables, writing functions, and combining them to solve real problems.

**Structure:**
- **Level 1 (Basic):** 8 foundational exercises - master the basics
- **Level 2 (Intermediate):** 6 combination exercises - apply multiple concepts
- **Level 3 (Advanced):** 4 challenge exercises - think creatively

---

## ⏱️ Suggested Timeline

**Total Time:** 2-3 hours

- Level 1: 45 minutes
- Level 2: 60 minutes
- Level 3: 45 minutes

*Take breaks between levels!*

---

## 💡 Tips for Success

- **Test your code:** Use browser console (F12) or an online editor like CodePen
- **Read error messages:** They often tell you exactly what's wrong
- **Experiment:** Try different approaches, break things, learn by doing
- **Don't rush:** Understanding is more important than speed

---

# Level 1: Basic Exercises
**BEGINNER FRIENDLY**

**Goal:** Practice creating variables and simple functions. These exercises focus on one concept at a time.

---

## Exercise 1.1: Create Variables

Create three variables to store information about yourself:
- Your name (use `const`)
- Your age (use `let`)
- Your favorite color (use `const`)

Then, use `console.log()` to display each variable.

**✓ Requirements:**
- Use appropriate keywords (`const` or `let`)
- Use descriptive variable names
- Display all three variables

---

## Exercise 1.2: Reassign Variables

Create a variable called `score` with an initial value of 0 using `let`. Then:
1. Add 10 to the score
2. Add 5 more to the score
3. Display the final score

---

## Exercise 1.3: Your First Function

Create a function called `greet` that displays "Hello, World!" to the console. Then call the function.

**✓ Requirements:**
- Function name: `greet`
- No parameters needed
- Uses `console.log()` to display message
- Call the function to test it

---

## Exercise 1.4: Function with Parameters

Create a function called `greetPerson` that accepts one parameter (`name`) and displays "Hello, [name]!".

Test it with at least two different names.

---

## Exercise 1.5: Function that Returns a Value

Create a function called `double` that accepts one number and returns that number multiplied by 2.

Test it with: 5, 10, and 25

**✓ Requirements:**
- Function name: `double`
- One parameter: `number`
- Must use `return` keyword
- Store results in variables and display them

---

## Exercise 1.6: Multiple Parameters

Create a function called `add` that accepts two numbers and returns their sum.

Test it with: (3, 7), (10, 20), (100, 250)

---

## Exercise 1.7: Calculate Area

Create a function called `calculateRectangleArea` that accepts width and height as parameters and returns the area (width × height).

Test with a 5×10 rectangle and a 7×3 rectangle.

---

## Exercise 1.8: Constant Values

Create a constant called `PI` with the value 3.14159. Then create a function called `calculateCircleArea` that accepts a radius and returns the area (π × radius²).

Test with radius: 5, 10

---

# Level 2: Intermediate Exercises
**MORE PRACTICE**

**Goal:** Combine variables and functions to solve more complex problems. These exercises require thinking through multiple steps.

---

## Exercise 2.1: Temperature Converter

Create a function called `celsiusToFahrenheit` that converts Celsius to Fahrenheit using the formula: F = (C × 9/5) + 32

Then:
1. Store three temperature values in Celsius: 0, 25, 100
2. Convert each to Fahrenheit using your function
3. Display results in a readable format

**✓ Requirements:**
- Function accepts one parameter (celsius)
- Returns the Fahrenheit value
- Use variables to store the Celsius values
- Display meaningful messages (e.g., "25°C = 77°F")

---

## Exercise 2.2: Age Calculator

Create a function called `calculateAge` that accepts a birth year and returns the person's age.

Then:
1. Store the current year in a constant (2026)
2. Create variables for three people's birth years: 1990, 2000, 2010
3. Calculate and display each person's age

---

## Exercise 2.3: Price Calculator with Tax

Create a function called `calculateTotalPrice` that accepts a price and tax rate (as a decimal), and returns the total price including tax.

Then calculate the total for:
- A $50 item with 10% tax (0.10)
- A $100 item with 8% tax (0.08)
- A $25.50 item with 5% tax (0.05)

---

## Exercise 2.4: BMI Calculator

Create a function called `calculateBMI` that accepts weight in kilograms and height in meters, and returns the BMI (Body Mass Index).

Formula: BMI = weight / (height × height)

Calculate BMI for:
- Person 1: 70 kg, 1.75 m
- Person 2: 85 kg, 1.80 m

---

## Exercise 2.5: String Combiner

Create a function called `createFullName` that accepts firstName and lastName as parameters and returns the full name with a space between them.

Then:
1. Store several first and last names in variables
2. Use your function to create full names
3. Display them

---

## Exercise 2.6: Discount Calculator

Create two functions:
1. `calculateDiscount` - accepts price and discount percentage, returns discount amount
2. `calculateFinalPrice` - accepts price and discount amount, returns final price

Use both functions together to calculate the final price of a $100 item with a 20% discount.

**✓ Requirements:**
- First function calculates the discount amount
- Second function subtracts discount from price
- Pass the result from first function to second function

---

# Level 3: Advanced Exercises
**CHALLENGE**

**Goal:** Apply everything you've learned to solve more complex, real-world problems. These require creative thinking and combining multiple concepts.

---

## Exercise 3.1: Tip Calculator

Create a complete tip calculator system:
1. `calculateTip` - accepts bill amount and tip percentage, returns tip amount
2. `calculateTotal` - accepts bill and tip, returns total
3. `splitBill` - accepts total and number of people, returns amount per person

**Scenario:** A group of 4 friends has a $120 bill and wants to leave a 18% tip. How much does each person pay?

**✓ Requirements:**
- Create all three functions
- Use variables for bill amount, tip percentage, and number of people
- Call functions in the correct order
- Display a complete breakdown: bill, tip, total, and per-person amount

---

## Exercise 3.2: Shipping Cost Calculator

Create a shipping calculator with these rules:
- Base shipping cost: $5
- Additional cost per kg: $2
- Express shipping adds 50% to the total

Create functions:
1. `calculateBaseShipping` - accepts weight in kg, returns base shipping cost
2. `calculateExpressShipping` - accepts base cost, returns express cost (base × 1.5)

Calculate shipping for a 5kg package with both regular and express options.

---

## Exercise 3.3: Unit Converter System

Create a comprehensive unit converter with these functions:
1. `kmToMiles` - converts kilometers to miles (1 km = 0.621371 miles)
2. `milesToKm` - converts miles to kilometers (1 mile = 1.60934 km)
3. `kgToPounds` - converts kg to pounds (1 kg = 2.20462 pounds)
4. `poundsToKg` - converts pounds to kg (1 pound = 0.453592 kg)

Then demonstrate all conversions with example values.

**✓ Requirements:**
- Create all four functions
- Use constants for conversion factors
- Test each function with at least one value
- Display results with proper units

---

## Exercise 3.4: Student Grade Calculator

Create a grade calculation system:
1. `calculateAverage` - accepts three test scores, returns average
2. `calculateWeightedAverage` - accepts homework score (40% weight) and exam score (60% weight), returns weighted average
3. `calculateFinalGrade` - accepts test average and weighted average, returns overall grade

**Scenario:** A student has:
- Three test scores: 85, 90, 88
- Homework average: 92
- Exam score: 87

Calculate their final grade by averaging the test average with the weighted average.

---

# 🎁 Bonus Challenge
**EXPERT LEVEL**

## Bonus: Complete Project - Fitness Tracker

Build a mini fitness tracking system with these features:

**✓ Requirements:**

**Create these functions:**
1. `calculateCaloriesBurned` - accepts minutes exercised and intensity level (low=5, medium=8, high=12 calories per minute), returns total calories burned
2. `calculateCalorieDeficit` - accepts calories consumed and calories burned, returns deficit (burned - consumed)
3. `calculateWeeksToGoal` - accepts calorie deficit per day and goal weight loss in kg (1 kg = 7700 calories), returns weeks needed

**Scenario:**
- Person exercises 45 minutes at medium intensity daily
- Consumes 2000 calories per day
- Goal: lose 5 kg

Calculate how many weeks to reach the goal.

---

# 🎯 Next Steps

## You've Completed the Sprint!

**What you've learned:**
- ✓ Creating variables with `const`, `let`, and `var`
- ✓ Writing functions with parameters and return values
- ✓ Combining functions to solve complex problems
- ✓ Understanding scope and variable accessibility
- ✓ Breaking down problems into smaller steps

**Keep Practicing:**
- Try modifying the exercises with different values
- Combine multiple exercises into larger programs
- Create your own functions for everyday calculations
- Build a small project using variables and functions

---

# Great Job! 🎉

You've completed the JavaScript Fundamentals Sprint! Variables and functions are the building blocks of programming, and you've mastered them.

**Keep coding, keep learning, and remember: practice makes perfect!**

Happy Coding! 💻
