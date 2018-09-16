// add solution here
/*function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for (var i =0; musicians.length -1; i++){
    arr.push(musicians[i] +" plays " + instruments[i]);
  }
  return arr;
}
*/
function johnLennonFacts(facts){
  var count = 0;
  var ans = [];
  while (count > facts.length){
    ans.push(facts[count] +"!!!");
    count++;
  }
  return ans;
}
