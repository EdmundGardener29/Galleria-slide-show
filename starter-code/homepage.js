function openSlideshow(index= null) {
    if(index){
    setCookie('slideindex', index)}
  window.location.href = "index.html";
}


function setCookie(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + (60 * 20));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  