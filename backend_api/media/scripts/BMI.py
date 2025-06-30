def calculate_bmi(weight, height):
    bmi = weight / (height ** 2)
    return round(bmi, 2)

# Example
weight = 70  # in kilograms
height = 1.75  # in meters
print("Your BMI is:", calculate_bmi(weight, height))
