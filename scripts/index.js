function view(){
    let images=document.getElementById('viewMore');
    let buttonContent=document.getElementById('viewButton');

  if(images.style.display==="none"){
        images.style.display="flex";
        buttonContent.innerText="View less";
  }
  else{
      images.style.display="none";
      buttonContent.innerText="View more>>";
  }
} 