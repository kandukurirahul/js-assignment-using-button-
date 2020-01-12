const app = document.getElementById('root')
function fetch(data){
    for(var i=0;i<data.length;i++){
        fname=data[i].name.first;
        lname=data[i].name.last;
        img=data[i].picture.large;
        email=data[i].email;
        addperson(fname,lname,img,email);
    }
    //console.log(data.length)
}
function addperson(frst,lst,avatar,mail)
{
      //creating card
      const card = document.createElement('div')
      card.setAttribute('class','card')
      //creating image
      if(avatar)
      {
      img=document.createElement('img')
      img.src=avatar;
      img.setAttribute('class','img')
      card.appendChild(img)
      }
      else{
          console.log("no image found")
          const notavailable=document.createElement('div')
          notavailable.textContent=frst[0]+lst[0]
          notavailable.setAttribute('class','notavailable')
          card.appendChild(notavailable)
      }
      //creating another div called details for info
      const details=document.createElement('div')
      details.setAttribute('class','details')

      const info_name=document.createElement('p')
      info_name.textContent=frst+" "+lst;
      info_name.setAttribute('class','info_name')
      
      const email=document.createElement('p')
      email.textContent=mail;
      email.setAttribute('class','email')
      //appending childs to parent div
      details.appendChild(info_name)
      details.appendChild(email)
      card.appendChild(details)
      app.appendChild(card)
}