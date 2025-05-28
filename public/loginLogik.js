   //använder mig av javascipt DOM. (document object model) 
   window.addEventListener('DOMContentLoaded', () => {
    //sparar olika värdena som variabler. Sparar login knapp, register, logout knapp.
    const loginBtn = document.querySelector('.login');
    const registerBtn = document.querySelector('.register');
    const logoutBtn = document.getElementById('logoutBtn');
    //sparar om att man är logged in (true värdet) som variabeln isloggedin
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    //om man är logged in, visa inte login eller registrera knappen utan endast log out.
    if (isLoggedIn) {
      if (loginBtn) loginBtn.style.display = 'none';
      if (registerBtn) registerBtn.style.display = 'none';
      if (logoutBtn) logoutBtn.style.display = 'inline-block';
    } else { //om man är inte logged in, visa både login och logout. 
      if (loginBtn) loginBtn.style.display = 'inline-block';
      if (registerBtn) registerBtn.style.display = 'inline-block';
      if (logoutBtn) logoutBtn.style.display = 'none';
    }
    //när man trycker på logout knappen, 
    if (logoutBtn) {
      //för click
      logoutBtn.addEventListener('click', () => {
        //tar bort isLoggedIn värdet
        localStorage.removeItem('isLoggedIn');
        //tar bort även mejlen som är sparat
        localStorage.removeItem('email');
        //automatisk hamnar på login.
        window.location.href = '/login.html';
      });
    }
  });
// ser till att användaren är logged in. annars tvingar de att logga in
function checkLogin(event) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (!isLoggedIn) {
    event.preventDefault();
    showLoginPopup();
    return false;
  }
  return true;
}
