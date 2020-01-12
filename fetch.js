//document.getElementById('r').innerHTML="Hello"
//var v=1
function load()
{
  var request = new XMLHttpRequest()
  url='https://randomuser.me/api/?results=100';
  request.open('GET',url, true)
  request.onload = function() {
  var jsondata = JSON.parse(this.response)
    var data=jsondata["results"]
    if(data.length>0){
      fetch(data)
    }
    else
    {
      alert("Reached end of file")
    }
  }
  request.send()
  //v=v+1
}  