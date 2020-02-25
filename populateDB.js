let db = require('./models/index')


const nbaTeams = [
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
"LA Clippers",
"LA Lakers",
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
const nflTeams = [
"Arizona Cardinals",
"Atlanta Falcons",
"Baltimore Ravens",
"Buffalo Bills",
"Carolina Panthers",
"Chicago Bears",
"Cincinnati Bengals",
"Cleveland Browns",
"Dallas Cowboys",
"Denver Broncos",
"Detroit Lions",
"Green Bay Packers",
"Houston Texans",
"Indianapolis Colts",
"Jacksonville Jaguars",
"Kansas City Chiefs",
"Los Angeles Chargers",
"Los Angeles Rams",
"Miami Dolphins",
"Minnesota Vikings",
"New England Patriots",
"New Orleans Saints",
"New York Giants",
"New York Jets",
"Oakland Raiders",
"Philadelphia Eagles",
"Pittsburgh Steelers",
"San Francisco 49ers",
"Seattle Seahawks",
"Tampa Bay Buccaneers",
"Tennessee Titans",
"Washington Redskins",
]
const mlbTeams = [
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
"Texas Rangers",
]
const nhlTeams =[
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
"Winnipeg Jets",
]
const majorFutbol =[
    "Inter Milian",
    "AS Roman",
    "Tottenham Hospur",
    "Borussia Dortmund",
    "Manchester City",
    "Paris Saint-Germain",
    "AC Milan",
    "Juventus",
    "FC Bayern Munich",
    "Liverpool",
    "Arsenal",
    "Chelsea FC",
    "FC Barcelona",
    "Real Madrid",
    "Manchester United"
]

let teams = [
    nbaTeams,
    nflTeams,
    mlbTeams,
    nhlTeams,
    majorFutbol
]

let sports = [
"mlb",
"nba",
"nfl",
"nhl",
"F1",
"mls",
"boxing",
"mma",
"golf",
"nascar",
"esports",
"college",
"wnba",
"tennis"
]

nbaTeams.forEach(async team => {
    await db.Team.create({name: team}).catch(error => console.log(error))
})
nflTeams.forEach(async team => {
    await db.Team.create({name: team}).catch(error => console.log(error))
})
mlbTeams.forEach(async team => {
    await db.Team.create({name: team}).catch(error => console.log(error))
})
nflTeams.forEach(async team => {
    await db.Team.create({name: team}).catch(error => console.log(error))
})
majorFutbol.forEach(async team => {
    await db.Team.create({name: team}).catch(error => console.log(error))
})
sports.forEach(async team => {
    await db.Team.create({name: team}).catch(error => console.log(error))
})