import axios from 'axios';
import qs from 'qs';

export default () => {
  const authForm = document.querySelector('.auth');
  const submitBtn = document.querySelector('.js-auth-enter');
  const inputs = {
    login: document.querySelector('#login'),
    password: document.querySelector('#password'),
    isHuman: document.querySelector('#ishuman'),
    radioHuman: document.querySelector('#yeshuman')
  }
  const inputsAll = [inputs.login, inputs.password, inputs.isHuman, inputs.radioHuman];

  submitBtn.addEventListener('click', () => {
    localStorage.clear();
    const formChecked = checkForm(authForm, inputs);
    if (formChecked) {
      sendLogin(inputs.login.value, inputs.password.value);
    }
  });

  inputsAll.forEach(input => {
    input.addEventListener('change', () => {
      checkForm(authForm, inputs)
    });
  });
}

function sendLogin (name, password) {
  const data = qs.stringify({
    name: name,
    password: password
  });
  const url = 'https://webdev-api.loftschool.com/login'
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: data,
    url,
  };
  axios(options).then(response => {
    localStorage.setItem('token', response.data.token);
    window.location.href = '/admin';
  }).catch(function (error) {
    console.error(error);
  })
}

function checkForm(form, inputs) {
  const checkIf = (check, input, changedClass) => {
    if (!check) {
      input.parentNode.classList.add(changedClass);
    } else {
      input.parentNode.classList.remove(changedClass);
    }
  };
  let check = false;
  check = checkEmpty(inputs.login);
  checkIf(check, inputs.login, 'auth__label--error');
  check = checkEmpty(inputs.password);
  checkIf(check, inputs.password, 'auth__label--error');
  check = checkChecked(inputs.isHuman);
  checkIf(check, inputs.isHuman, 'auth__checkbox-label--error');
  check = checkChecked(inputs.radioHuman);
  if (!check) {
    document.querySelectorAll('.auth__radio-label').forEach(element => {
      element.classList.add('auth__radio-label--error');
    })
  } else {
    document.querySelectorAll('.auth__radio-label').forEach(element => {
      element.classList.remove('auth__radio-label--error');
    })
  }
  return check;
}

function checkEmpty(input) {
  return input.value.length > 0;
}

function checkChecked(input) {
  return input.checked;
}
