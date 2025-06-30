import requests
from bs4 import BeautifulSoup

def get_title(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")
    return soup.title.string.strip()

# Example
# print(get_title("https://example.com"))
