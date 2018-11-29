function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('div#nested div.target')
}

function increaseRankBy(n){
  let ranks = document.querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < ranks.length; i++){
    let current = ranks[i];
    current.innerHTML.parseInt() += 1; 
  }
}

function deepestChild(){
  return doucment.querySelector('div#grand-node div div div div');
}
