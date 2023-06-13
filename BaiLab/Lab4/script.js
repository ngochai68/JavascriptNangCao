"use strict";

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2022-12-01T17:01:17.194Z",
    "2022-12-06T23:36:17.929Z",
    "2022-12-08T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", 
};

const account2 = {
  owner: "Alamin Mt",
  movements: [2500, 400, -260, 830, -4210, 2200, 4600, -70],
  interestRate: 1.8,
  pin: 2222,

  movementsDates: [
    "2019-11-03T13:15:33.035Z",
    "2019-11-25T09:48:16.867Z",
    "2019-12-16T06:04:23.907Z",
    "2020-01-12T14:18:46.235Z",
    "2020-02-25T16:33:06.386Z",
    "2020-04-11T14:43:26.374Z",
    "2020-06-15T18:49:59.371Z",
    "2020-07-30T12:01:20.894Z",
  ],
  currency: "BDT",
  locale: "en-US",
};

const account3 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 3333,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2, account3];

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");


const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {

    return new Intl.DateTimeFormat(locale).format(date);
  }
};


const formatCur = function (value, local, currency) {
  return new Intl.NumberFormat(local, {
    style: "currency",
    currency: currency,
  }).format(value);
};


const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const formatedMov = formatCur(mov, acc.local, acc.currency);

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formatedMov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balence = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balence, acc.local, acc.currency);
};


const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.local, acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.local, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposite) => (deposite * acc.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.local, acc.currency);
};


const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUserName(accounts);

const updateUI = function (acc) {

  displayMovements(acc);


  calcDisplayBalance(acc);


  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {

    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;


    if (time === 0) {
      clearInterval(timer);

      containerApp.style.opacity = "0";
      containerApp.style.visibility = "hidden";
    }


    time--;
  };


  let time = 60 * 5;

  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};


let currentAccount, timer;

btnLogin.addEventListener("click", function (e) {

  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {

    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }!`;
    containerApp.style.visibility = "visible";
    containerApp.style.opacity = "1";

    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };
    const now = new Date();
    labelDate.textContent = new Intl.DateTimeFormat(
      navigator.language,
      options
    ).format(now);


    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    if (timer) {
      clearInterval(timer);
    }
    timer = startLogOutTimer();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balence >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {

    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);


    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());


    clearInterval(timer);
    timer = startLogOutTimer();

    updateUI(currentAccount);
  }
});


btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  setTimeout(() => {
    if (
      amount > 0 &&
      currentAccount.movements.some((mov) => mov >= (amount * 10) / 100)
    ) {
      currentAccount.movements.push(amount);


      currentAccount.movementsDates.push(new Date().toISOString());


      clearInterval(timer);
      timer = startLogOutTimer();


      updateUI(currentAccount);
    }
  }, 1000);
  inputLoanAmount.value = "";
});


btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);

    containerApp.style.opacity = "0";
    containerApp.style.visibility = "hidden";
  }
  inputCloseUsername.value = inputClosePin.value = "";
});


let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();

  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});


const bankDepositSum = accounts
 .flatMap(acc => acc.movements)
 .filter(mov => mov > 0)
 .reduce((sum, cur) => sum + cur, 0)
 console.log(bankDepositSum);


const numDeposits1000 = accounts
.flatMap(acc => acc.movements)
.reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

let a = 10;
console.log(++a);
console.log(a);


const { deposits, withdrawals } = accounts
 .flatMap(acc => acc.movements)
 .reduce(
 (sums, cur) => {

 sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
 return sums;
 },
 { deposits: 0, withdrawals: 0 }
 );

 console.log(deposits, withdrawals);

const convertTitleCase = function (title) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 
 'with'];
  const titleCase = title
  .toLowerCase()
  .split(' ')
  .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
  .join(' ');
  return capitzalize(titleCase);
 };
 console.log(convertTitleCase('this is a nice title'));
 console.log(convertTitleCase('this is a LONG title but not too long'));
 console.log(convertTitleCase('and here is another title with an EXAMPLE')); 
