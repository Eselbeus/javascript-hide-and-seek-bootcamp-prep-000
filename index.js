function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('div#nested div.target')
}

function increaseRankBy(n){
  let ranks = document.querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = Number(ranks[i].innerHTML) + n;
  }
}

function deepestChild(){
  return document.querySelector('div#grand-node div div div div');
}
