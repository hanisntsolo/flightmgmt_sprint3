class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    console.log('registerSuccessfulLogin')
    sessionStorage.setItem('Authenticated User', username);
  }
  logout() {
    sessionStorage.removeItem('Authenticated User');
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('Authenticated User')
    if (user===null) {
      return false
    }
    else {
      return true
    }
  }
}

export default new AuthenticationService();