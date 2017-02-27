import auth from './index';


export function checkIfAuthOrRedirect(nextState, replace) {
  console.log("test");
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}