function showOperation1() {
  newPageTitle = 'Log in';
  document.title = newPageTitle;
  operation1.style.display = 'flex';
  operation2.style.display = 'none';
  operation3.style.display = 'none';
  operation4.style.display = 'none';
}

function showOperation2() {
  newPageTitle = 'Sign up';
  document.title = newPageTitle;
  operation1.style.display = 'none';
  operation2.style.display = 'flex';
  operation3.style.display = 'none';
  operation4.style.display = 'none';
}

function showOperation3() {
  newPageTitle = 'Recover your password';
  document.title = newPageTitle;
  operation1.style.display = 'none';
  operation2.style.display = 'none';
  operation3.style.display = 'flex';
  operation4.style.display = 'none';
}

function showOperation4() {
  newPageTitle = 'Check your email';
  document.title = newPageTitle;
  operation1.style.display = 'none';
  operation2.style.display = 'none';
  operation3.style.display = 'none';
  operation4.style.display = 'flex';
}
