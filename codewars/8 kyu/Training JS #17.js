function firstToLast(str,c){
var first=str.indexOf(c),last=str.lastIndexOf(c);
var lenght=last-first;

return str.includes(c)?lenght:str.indexOf(c);
  
}