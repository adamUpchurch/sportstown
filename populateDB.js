let db = require('./models/index')


var nbaTeams = [
{name: "Atlanta Hawks", logo: "", city: "Atlanta"},
{name: "Boston Celtics", logo: "", city: "Boston"},
{name: "Brooklyn Nets", logo: "", city: "Brooklyn"},
{name: "Charlotte Bobcats", logo: "", city: "Charlotte"},
{name: "Chicago Bulls", logo: "", city: "Chicago"},
{name: "Cleveland Cavaliers", logo: "", city: "Cleveland"}, 
{name: "Dallas Mavericks", logo: "", city: "Dallas"},
{name: "Denver Nuggets", logo: "", city: "Denver"},
{name: "Detroit Pistons", logo: "", city: "Detroit"},
{name: "Golden State Warriors", logo: "", city: "Golden"},
{name: "Houston Rockets", logo: "", city: "Houston"},
{name: "Indiana Pacers", logo: "", city: "Indiana"},
{name: "Los Angeles Clippers", logo: "", city: "Los Angeles"},
{name: "Los Angeles Lakers", logo: "", city: "Los Angeles"},
{name: "Memphis Grizzlies", logo: "", city: "Memphis"},
{name: "Miami Heat", logo: "", city: "Miami"},
{name: "Milwaukee Bucks", logo: "", city: "Milwaukee"},
{name: "Minnesota Timberwolves", logo: "", city: "Minnesota"},
{name: "New Orleans Hornets", logo: "", city: "New Orleans"},
{name: "New York Knicks", logo: "", city: "New York"},
{name: "Oklahoma City Thunder", logo: "", city: "Oklahoma City"},
{name: "Orlando Magic", logo: "", city: "Orlando"},
{name: "Philadelphia Sixers", logo: "", city: "Philadelphia"},
{name: "Phoenix Suns", logo: "", city: "Phoenix"},
{name: "Portland Trail Blazers", logo: "", city: "Portland"},
{name: "Sacramento Kings", logo: "", city: "Sacramento"},
{name: "San Antonio Spurs", logo: "", city: "San Antonio"},
{name: "Toronto Raptors", logo: "", city: "Toronto"},
{name: "Utah Jazz", logo: "", city: "Salt Lake City"},
{name: "Washington Wizards", logo: "", city: "Washington"}
]
var nflTeams = [
{name: "Arizona Cardinals", logo: "", city: "Arizona"},
{name: "Atlanta Falcons", logo: "", city: "Atlanta"},
{name: "Baltimore Ravens", logo: "", city: "Baltimore"},
{name: "Buffalo Bills", logo: "", city: "Buffalo"},
{name: "Carolina Panthers", logo: "", city: "Carolina"},
{name: "Chicago Bears", logo: "", city: "Chicago"},
{name: "Cincinnati Bengals", logo: "", city: "Cincinnati"},
{name: "Cleveland Browns", logo: "", city: "Cleveland"},
{name: "Dallas Cowboys", logo: "", city: "Dallas"},
{name: "Denver Broncos", logo: "", city: "Denver"},
{name: "Detroit Lions", logo: "", city: "Detroit"},
{name: "Green Bay Packers", logo: "", city: "Green Bay"},
{name: "Houston Texans", logo: "", city: "Houston"},
{name: "Indianapolis Colts", logo: "", city: "Indianapolis"},
{name: "Jacksonville Jaguars", logo: "", city: "Jacksonville"},
{name: "Kansas City Chiefs", logo: "", city: "Kansas City"},
{name: "Los Angeles Chargers", logo: "", city: "Los Angeles"},
{name: "Los Angeles Rams", logo: "", city: "Los Angeles"},
{name: "Miami Dolphins", logo: "", city: "Miami"},
{name: "Minnesota Vikings", logo: "", city: "Minnesota"},
{name: "New England Patriots", logo: "", city: "Boston"},
{name: "New Orleans Saints", logo: "", city: "New Orleans"},
{name: "New York Giants", logo: "", city: "New York"},
{name: "New York Jets", logo: "", city: "New York"},
{name: "Oakland Raiders", logo: "", city: "Oakland"},
{name: "Philadelphia Eagles", logo: "", city: "Philadelphia"},
{name: "Pittsburgh Steelers", logo: "", city: "Pittsburgh"},
{name: "San Francisco 49ers", logo: "", city: "San Francisco"},
{name: "Seattle Seahawks", logo: "", city: "Seattle"},
{name: "Tampa Bay Buccaneers", logo: "", city: "Tampa Bay"},
{name: "Tennessee Titans", logo: "", city: "Nashville"},
{name: "Washington Redskins", logo: "", city: "Washington"}
]
var mlbTeams = [
{name: "Atlanta Braves", logo: "", city: "Atlanta"},
{name: "Miami Marlins", logo: "", city: "Miami"},
{name: "New York Mets", logo: "", city: "New York"},
{name: "Philadelphia Phillies", logo: "", city: "Philadelphia"},
{name: "Washington Nationals", logo: "", city: "Washington"},
{name: "Chicago Cubs", logo: "", city: "Chicago"},
{name: "Cincinnati Reds", logo: "", city: "Cincinnati"},
{name: "Milwaukee Brewers", logo: "", city: "Milwaukee"},
{name: "Pittsburgh Pirates", logo: "", city: "Pittsburgh"},
{name: "St Louis Cardinals", logo: "", city: "St. Louis"},
{name: "Arizona Diamondbacks", logo: "", city: "Arizona"},
{name: "Colorado Rockies", logo: "", city: "Denver"},
{name: "Los Angeles Dodgers", logo: "", city: "Los Angeles"},
{name: "San Diego Padres", logo: "", city: "San"},
{name: "San Francisco Giants", logo: "", city: "San Francisco"},
{name: "Baltimore Orioles", logo: "", city: "Baltimore"},
{name: "Boston Red Sox", logo: "", city: "Boston"},
{name: "New York Yankees", logo: "", city: "New York"},
{name: "Tampa Bay Rays", logo: "", city: "Tampa"},
{name: "Toronto Blue Jays", logo: "", city: "Toronto"},
{name: "Chicago White Sox", logo: "", city: "Chicago"},
{name: "Cleveland Indians", logo: "", city: "Cleveland"},
{name: "Detroit Tigers", logo: "", city: "Detroit"},
{name: "Kansas City Royals", logo: "", city: "Kansas City"},
{name: "Minnesota Twins", logo: "", city: "Minnesota"},
{name: "Houston Astros", logo: "", city: "Houston"},
{name: "Los Angeles Angels", logo: "", city: "Los Angeles"},
{name: "Oakland Athletics", logo: "", city: "Oakland"},
{name: "Seattle Mariners", logo: "", city: "Seattle"},
{name: "Texas Rangers", logo: "", city: "Dallas"}
]
var nhlTeams =[
{name: "Anaheim Ducks", logo: "", city: "Anaheim"},
{name: "Arizona Coyotes", logo: "", city: "Arizona"},
{name: "Boston Bruins", logo: "", city: "Boston"},
{name: "Buffalo Sabres", logo: "", city: "Buffalo"},
{name: "Calgary Flames", logo: "", city: "Calgary"},
{name: "Carolina Hurricanes", logo: "", city: "Carolina"},
{name: "Chicago Blackhawks", logo: "", city: "Chicago"},
{name: "Colorado Avalanche", logo: "", city: "Colorado"},
{name: "Columbus Blue Jackets", logo: "", city: "Columbus"},
{name: "Dallas Stars", logo: "", city: "Dallas"},
{name: "Detroit Red Wings", logo: "", city: "Detroit"},
{name: "Edmonton Oilers", logo: "", city: "Edmonton"},
{name: "Florida Panthers", logo: "", city: "Florida"},
{name: "Los Angeles Kings", logo: "", city: "Los Angelse"},
{name: "Minnesota Wild", logo: "", city: "Minnesota"},
{name: "Montreal Canadiens", logo: "", city: "Montreal"},
{name: "Nashville Predators", logo: "", city: "Nashville"},
{name: "New Jersey Devils", logo: "", city: "New Jersey"},
{name: "New York Islanders", logo: "", city: "New York"},
{name: "New York Rangers", logo: "", city: "New York"},
{name: "Ottawa Senators", logo: "", city: "Ottawa"},
{name: "Philadelphia Flyers", logo: "", city: "Philadelphia"},
{name: "Pittsburgh Penguins", logo: "", city: "Pittsburgh"},
{name: "San Jose Sharks", logo: "", city: "San Jose"},
{name: "St Louis Blues", logo: "", city: "St Louis"},
{name: "Tampa Bay Lightning", logo: "", city: "Tampa Bar"},
{name: "Toronto Maple Leafs", logo: "", city: "Toronto"},
{name: "Vancouver Canucks", logo: "", city: "Vancouver"},
{name: "Vegas Golden Knights", logo: "", city: "Vegas"},
{name: "Washington Capitals", logo: "", city: "Washington"},
{name: "Winnipeg Jets", logo: "", city: "Winnipeg"}
]
var mlsTeams = [
    {name: "Atlanta United FC", logo: "", city: "Atlanta"},
    {name: "Austin FC", logo: "", city: "Austin"},
    {name: "Chicago Fire", logo: "", city: "Chicago"},
    {name: "Colorado Rapids", logo: "", city: "Colorado"},
    {name: "Columbus Crew SC", logo: "", city: "Columbus"},
    {name: "DC United", logo: "", city: "D.C."},
    {name: "FC Dallas", logo: "", city: "Dallas"},
    {name: "Houston Dynamo", logo: "", city: "Houston"},
    {name: "Inter Miami CF", logo: "", city: "Miami"},
    {name: "Los Angeles Galaxy", logo: "", city: "Los Angelse"},
    {name: "Los Angeles FC", logo: "", city: "Los Angeles"},
    {name: "Minnesota United FC", logo: "", city: "Minnesota"},
    {name: "Montreal Impact", logo: "", city: "Montreal"},
    {name: "Nashville SC", logo: "", city: "Nashville"},
    {name: "New England Revolution", logo: "", city: "Boston"},
    {name: "New York City FC", logo: "", city: "New York"},
    {name: "New York Red Bulls", logo: "", city: "New York"},
    {name: "Orlando City SC", logo: "", city: "Orlando"},
    {name: "Philadelphia Union", logo: "", city: "Philadelphia"},
    {name: "Portland Timbers", logo: "", city: "Portland"},
    {name: "Real Salt Lake", logo: "", city: "Salt Lkae"},
    {name: "Sacremento Republic FC", logo: "", city: "Sacremento"},
    {name: "San Jose Earthquakes", logo: "", city: "San Jose"},
    {name: "Seattle Sounders FC", logo: "", city: "Seattle"},
    {name: "Sporting Kansas City", logo: "", city: "Kansas City"},
    {name: "St. Louis MLS Team", logo: "", city: "St Louis"},
    {name: "Toronto FC", logo: "", city: "Toronto"},
    {name: "Vancouver Whitecaps FC", logo: "", city: "Vancouver"}
    ]
var uefaTeams = [
    {name: "Atalanta", logo: "", city: "Columbus"},
    {name: "Atletico Madrix", logo: "", city: "D.C."},
    {name: "Barcelona", logo: "", city: "Dallas"},
    {name: "Bayern Munich", logo: "", city: "Los Angelse"},
    {name: "Borussia Dortmund", logo: "", city: "Minnesota"},
    {name: "Celtic", logo: "", city: "Montreal"},
    {name: "Chelsea", logo: "", city: "Nashville"},
    {name: "FC Copenhagen", logo: "", city: "Boston"},
    {name: "Juventus", logo: "", city: "New York"},
    {name: "Liverpool", logo: "", city: "New York"},
    {name: "Manchester City", logo: "", city: "Orlando"},
    {name: "Paris Saint Germain", logo: "", city: "Philadelphia"},
    {name: "Real Madris", logo: "", city: "Portland"},
    {name: "Tottenham Hotspur", logo: "", city: "Salt Lkae"},
    {name: "Valencia", logo: "", city: "Sacremento"}
    ]


let leagues = [
    [nbaTeams,'nba'],
    [nflTeams, 'nfl'],
    [mlbTeams, 'mlb'],
    [nhlTeams, 'nhl'],
    [mlsTeams, 'mls']
]

let sports = [
"F1",
"boxing",
"mma",
"golf",
"nascar",
"esports",
"wnba",
"tennis"
]

uefaTeams.forEach(async team => {
    let logo = `${team.name.split(' ').join('-')}.png`.toLowerCase();
    let url = `https://sportstown.s3.us-east-2.amazonaws.com/Logos/futbol/${logo}`
    await db.Team.create({name: team.name, logo: url}).catch(error => console.log(error))
})