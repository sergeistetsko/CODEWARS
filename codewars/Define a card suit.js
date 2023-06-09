function defineSuit(card) {
    if ((card[1] == "♣") || (card[2] == "♣")) {return 'clubs'};
    if ((card[1] == "♦") || (card[2] == "♦")) {return 'diamonds'};  
    if ((card[1] == "♥") || (card[2] == "♥")) {return 'hearts'};    
    return 'spades';
  }