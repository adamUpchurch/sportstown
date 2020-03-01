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

let colleges = [
"Appalachian State University",
"Arizona State University",
"Arkansas State University",
"Auburn University",
"Baylor University", 
"Boise State University",
"Boston College",
"Bowling Green State University",
"Brigham Young",
"Clemson University",
"College of William & Mary",
"Colorado State University",
"Davidson College",
"Duke University",
"East Carolina University",
"Florida State University",
"Georgetown University",
"Georgia Tech",
"Harvard University",
"Houston Baptist University",
"Idaho State University",
"Indiana University",
"Iowa State University",
"Kansas State University",
"Miami University",
"Michigan State University",
"Mississippi State University",
"Missouri State University",
"Murray State University",
"New Mexico State University",
"North Carolina A&T State University",
"North Carolina State University",
"Northwestern University",
"Ohio State University",
"Ohio University",
"Oklahoma State University",
"Old Dominion University",
"Oregon State University",
"Penn State University",
"Purdue University",
"Rutgers University",
"San Diego State University",
"Stanford University",
"Syracuse University",
"Temple University",
"Texas A&M University",
"Texas Christian University",
"Texas Tech University",
"Troy University",
"Tulane University",
"United States Air Force Academy",
"United States Military Academy",
"United States Naval Academy",
"University of Alabama",
"University of Arizona",
"University of Arkansas",
"University of California",
"University of California - DavisDavis", 
"University of Cincinnati",
"University of Colorado - BoulderBoulder",
"University of Connecticut", 
"University of Delaware",
"University of Florida",
"University of Georgia",
"University of Houston",
"University of Idaho",
"University of Illinois",
"University of Iowa",
"University of Kansas",
"University of Kentucky",
"University of Louisiana - Lafayette",
"University of Louisiana - Monroe",
"University of Louisville",
"University of Maine",
"University of Maryland",
"University of Memphis",
"University of Miami",
"University of Michigan",
"University of Minnesota",
"University of Mississippi",
"University of Missouri",
"University of Montana",
"University of Nebraska",
"University of New Hampshire",
"University of New Mexico",
"University of North Carolina",
"University of Notre Dame",
"University of Oklahoma",
"University of Oregon",
"University of Pennsylvania",
"University of Pittsburgh",
"University of Rhode Island",
"University of Richmond",
"University of San Diego",
"University of South Alabama",
"University of South Carolina",
"University of Tennessee",
"University of Texas - Austin",
"University of Utah",
"University of Virginia",
"University of Wisconsin",
"Utah State University",
"Vanderbilt University",
"Villanova University",
"Virginia Tech",
"Wake Forest University",
"West Virginia University"
]

let mls = [
"Atlanta United FC",
"Austin FC",
"Chicago Fire",
"Colorado Rapids",
"Columbus Crew SC",
"D.C. United",
"FC Dallas",
"Houston Dynamo",
"Inter Miami CF",
"LA Galaxy",
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

mls.forEach(async team => {
    await db.Team.create({name: team}).catch(error => console.log(error))
})