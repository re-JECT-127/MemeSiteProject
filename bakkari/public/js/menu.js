const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  
  document.getElementById('themeButton').onclick = toggleTheme;
  let log = document.getElementById('loggaus')
  log.addEventListener('click', event =>  {
    let loginbox = document.querySelector('.login-box');
    let registerbox = document.querySelector('.register-box');
   if(loginbox.style.display = "block"){
     registerbox.style.display = "none";
   }

});


  let reg = document.getElementById('reg')
  reg.addEventListener('click', event =>  {
    let loginbox = document.querySelector('.login-box');
    let registerbox = document.querySelector('.register-box');
    if(registerbox.style.display = "block"){
    loginbox.style.display = "none";
    }
   else{
    loginbox.style.display = "block";
   }
});



  