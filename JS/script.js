var menuBox = document.getElementById("menu-wrap");
var menuIcon = document.getElementById("hamburger");
var icon = document.querySelector('.icon');
var search = document.querySelector('.searchbar');
var cardtog = document.getElementById("cardtoggle");
var cardtogr = document.getElementById("cardtoggler")
var cardshow = document.querySelector('.load-more');
var arrow = document.getElementById('viewmore');
menuIcon.onclick = function(){
  menuBox.classList.toggle("open-menu");
}
icon.onclick = function(){
  search.classList.toggle('active');
}
cardshow.onclick = function(){
  cardtog.classList.toggle('card');
  cardtogr.classList.toggle('card');
  arrow.classList.toggle('bi-arrow-up-short');
  arrow.classList.toggle('bi-arrow-down-short');
  
}
