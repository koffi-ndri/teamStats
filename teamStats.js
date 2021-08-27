const team = {
  _players: [{firstName: 'Pablo',lastName: 'Sanchez',age: 11},
  {firstName: 'John',lastName: 'Ramsey',age: 12},{firstName: 'James',lastName: 'Miller',age: 13}],
  _games: [{opponent: 'Broncos',teamPoints: 42,opponentPoints: 27},
  {opponent: 'Bar',teamPoints: 67,opponentPoints: 57},
  {opponent: 'Sar',teamPoints: 52,opponentPoints: 57}],

  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },
  
  addGame(opponent,teamPoints,opponentPoints){
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game);
  }
};
team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);
team.addGame('Gh',44,46);
team.addGame('Jack',64,47);
team.addGame('Tom',50,50);
console.log(team.players);
console.log(team.games);