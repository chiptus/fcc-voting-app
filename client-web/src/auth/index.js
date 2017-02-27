module.exports = {
  login(email, pass) {
    return new Promise((resolve, reject) => {
      if (localStorage.token) {
        this.onChange(true)
        return resolve(true);
      }
      pretendRequest(email, pass)
        .then((res) => {
          if (res.authenticated) {
            localStorage.token = res.token
          }
          this.onChange(res.authenticated);
          return resolve(res.authenticated);
        })
    });
  },

  getToken() {
    return localStorage.token;
  },

  logout() {
    localStorage.removeItem("token");
    this.onChange(false);
    return Promise.resolve()
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() { }
}

function pretendRequest(email, pass) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (email === 'joe@example.com' && pass === 'password1') {
        return res({
          authenticated: true,
          token: Math.random().toString(36).substring(7)
        })
      }
      res({ authenticated: false })

    }, 0)
  })
}