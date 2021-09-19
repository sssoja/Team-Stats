const team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 11,
    },
    {
      firstName: "Peter",
      lastName: "Crouch",
      age: 16,
    },
    {
      firstName: "Paul",
      lastName: "Scholes",
      age: 60,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "United",
      teamPoints: 30,
      opponentPoints: 40,
    },
    {
      opponent: "City",
      teamPoints: 10,
      opponentPoints: 14,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age,
    };
    this._players.push(player);
  },
  addGame(opponentName, teamPoints, opponentPoints) {
    const game = {
      opponentName,
      teamPoints,
      opponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team._players);

team.addGame("liverpool", 20, 3);
team.addGame("arsenal", 49, 5);
team.addGame("oldham", 30, 2);

console.log(team._games);
