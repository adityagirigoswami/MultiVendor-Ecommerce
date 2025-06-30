import requests

def check_urls(urls):
    for url in urls:
        try:
            res = requests.get(url, timeout=5)
            print(f"{url} - {res.status_code}")
        except requests.exceptions.RequestException:
            print(f"{url} - Failed")

# Example
# check_urls(["https://google.com", "https://thisurldoesnotexist.com"])
