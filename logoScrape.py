import time
import urllib.request as req

nbaTeams = [
"nba",
"Atlanta Hawks",
"Boston Celtics",
"Brooklyn Nets",
"Charlotte Bobcats",
"Chicago Bulls",
"Cleveland Cavaliers",
"Dallas Mavericks",
"Denver Nuggets",
"Detroit Pistons",
"Golden State Warriors",
"Houston Rockets",
"Indiana Pacers",
"Los Angeles Clippers",
"Los Angeles Lakers",
"Memphis Grizzlies",
"Miami Heat",
"Milwaukee Bucks",
"Minnesota Timberwolves",
"New Orleans Hornets",
"New York Knicks",
"Oklahoma City Thunder",
"Orlando Magic",
"Philadelphia Sixers",
"Phoenix Suns",
"Portland Trail Blazers",
"Sacramento Kings",
"San Antonio Spurs",
"Toronto Raptors",
"Utah Jazz",
"Washington Wizards"
]


mlbTeams = [
    "mlb",
"Atlanta Braves",
"Miami Marlins",
"New York Mets",
"Philadelphia Phillies",
"Washington Nationals",
"Chicago Cubs",
"Cincinnati Reds",
"Milwaukee Brewers",
"Pittsburgh Pirates",
"St. Louis Cardinals",
"Arizona Diamondbacks",
"Colorado Rockies",
"Los Angeles Dodgers",
"San Diego Padres",
"San Francisco Giants",
"Baltimore Orioles",
"Boston Red Sox",
"New York Yankees",
"Tampa Bay Rays",
"Toronto Blue Jays",
"Chicago White Sox",
"Cleveland Indians",
"Detroit Tigers",
"Kansas City Royals",
"Minnesota Twins",
"Houston Astros",
"Los Angeles Angels",
"Oakland Athletics",
"Seattle Mariners",
"Texas Rangers"]

nhlTeams =[
    "nhl",
"Anaheim Ducks",
"Arizona Coyotes",
"Boston Bruins",
"Buffalo Sabres",
"Calgary Flames",
"Carolina Hurricanes",
"Chicago Blackhawks",
"Colorado Avalanche",
"Columbus Blue Jackets",
"Dallas Stars",
"Detroit Red Wings",
"Edmonton Oilers",
"Florida Panthers",
"Los Angeles Kings",
"Minnesota Wild",
"Montreal Canadiens",
"Nashville Predators",
"New Jersey Devils",
"New York Islanders",
"New York Rangers",
"Ottawa Senators",
"Philadelphia Flyers",
"Pittsburgh Penguins",
"San Jose Sharks",
"St. Louis Blues",
"Tampa Bay Lightning",
"Toronto Maple Leafs",
"Vancouver Canucks",
"Vegas Golden Knights",
"Washington Capitals",
"Winnipeg Jets"
]
mlsTeams = [
"mls",
"Atlanta United FC",
"Austin FC",
"Chicago Fire",
"Colorado Rapids",
"Columbus Crew SC",
"D.C. United", 
"FC Dallas",
"Houston Dynamo",
"Inter Miami CF",
"Los Angeles Galaxy",
"Los Angeles FC",
"Minnesota United FC",
"Montreal Impact",
"Nashville SC",
"New England Revolution",
"New York City FC",
"New York Red Bulls",
"Orlando City SC",
"Philadelphia Union",
"Portland Timbers",
"Real Salt Lake",
"Sacremento Republic FC",
"San Jose Earthquakes",
"Seattle Sounders FC",
"Sporting Kansas City",
"St. Louis MLS Team",
"Toronto FC",
"Vancouver Whitecaps FC"
]

leagues = [nbaTeams, mlbTeams, mlbTeams, nhlTeams]

def download_logo(league, name):
    URL = 'https://cdn.freebiesupply.com/images/large/2x/' + name + '-logo-transparent.png'
    req.urlretrieve(URL, 'public/images/team_logos/' + league + '/' + name + '.png')
    time.sleep(3)

for league in [["nba","Atlanta Hawks","Boston Celtics"]]:
    for team in league:
        team = '-'.join(team.split(' ')) 
        print(team)
        download_logo("test", team)

