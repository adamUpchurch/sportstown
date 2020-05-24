import time
import urllib.request as req

import requests
from bs4 import BeautifulSoup

def scrapeThis(league):
    # url = 'https://www.espn.com/' + league + '/teams'
    url= 'https://www.espn.com/soccer/teams/_/league/UEFA.CHAMPIONS/uefa-champions-league'
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    
    teams = soup.find_all("section", class_="TeamLinks")

    for team in teams:
        team = team.find('a', class_="AnchorLink")
        team = team["href"].split('/')
        teamShort = team[-2]
        teamName = team[-1]
        
        logoURL='https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/' + teamShort + '.png'
        print('scraping: ', teamName)
        download_logo(teamName, league, logoURL)
        print('scraped that shit!')
        time.sleep(2)
    print('And we are done here')


def download_logo(team, league, url):
    req.urlretrieve(url, 'public/images/team_logos/ncaa/' + team + '.png')
    time.sleep(3)

scrapeThis('mls')

