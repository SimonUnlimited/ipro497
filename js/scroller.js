function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'https://raw.githubusercontent.com/OntologicalSin/ipro497/main/src/js/candidates.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
}

function makestack(){
  var nums = Array.from(Array(100).keys()),
    ranNums = [],
    i = nums.length,
    j = 0;

  while (i--) {
      j = Math.floor(Math.random() * (i+1));
      ranNums.push(nums[j]);
      nums.splice(j,1);
  }
  i = 0;
  return ranNums;
}

function next(){
  if(i<100){
    var entry = json[stack[i]];
    console.log(entry)
    document.getElementById("card-name").innerHTML = entry.name;
    document.getElementById("card-bio").innerHTML = entry.biography;
    document.getElementById("card-pic").src = entry.photo_url;
    i+=1;
  }
}
var json;
function setjson(x){json = x};
var json = loadJSON(function(json) {
  console.log(json); // this will log out the json object
  setjson(json);
});
var i =0 ;
var stack = makestack();
