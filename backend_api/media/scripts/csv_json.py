import csv
import json

def convert(csv_file, json_file):
    with open(csv_file, 'r') as f:
        reader = csv.DictReader(f)
        data = list(reader)

    with open(json_file, 'w') as f:
        json.dump(data, f, indent=4)

# Usage: convert("data.csv", "data.json")
