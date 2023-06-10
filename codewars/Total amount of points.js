function points(games) {
  let num = 0;
  for (let i = 0; i < games.length; i++) {
  if (games[i][0] > games[i][2]) { num +=3; }
  if (games[i][0] < games[i][2]) { num +=0; }
  if (games[i][0] == games[i][2]) { num +=1; }    
  }
  return num;
}