//document.getElementById('r').innerHTML="Hello"
var v=1
function load()
{
  var request = new XMLHttpRequest()
  url='https://randomuser.me/api/?results=100';
  request.open('GET',url, true)
  request.onload = function() {
  var data = JSON.parse(this.response)
    var dob=data["results"]
    if(dob.length>0){
      U(dob)
    }
    else
    {
      alert("Reached end of file")
    }
  }
  request.send()
  v=v+1
}  