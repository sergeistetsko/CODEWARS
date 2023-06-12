function power(x,y){
  let step = 1;
  let i = 0;
  while (i !== y) {
    step *= x;
    i++;
}
  return step; 
}