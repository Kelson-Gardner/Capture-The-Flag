import requests
from bs4 import BeautifulSoup

url = "https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge"
response = requests.get(url)
html = response.content

soup = BeautifulSoup(html, 'html.parser')

pattern_elements = soup.find_all('code', class_="ramp")

# print(pattern_elements)

new_url = ""

for child in pattern_elements:
    div = child.find('div', class_="ramp")
    if div:
        span = div.find('span', class_="ramp")
        if span:
            i = span.find('i', class_="ramp char")
            if i:
                new_url += i.get("value")


print(new_url)