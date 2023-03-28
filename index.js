import Library from './modules/class.js';
import { DateTime } from './modules/luxon.js';
import { navBar } from './modules/navbar.js';

document.addEventListener('DOMContentLoaded', () => {
  const library = new Library();
  library.init();
});

document.addEventListener('DOMContentLoaded', () => {
  navBar();
});

const currentTime = DateTime.now().toLocaleString(
  DateTime.DATETIME_MED_WITH_SECONDS,
);
document.getElementById('time__text').innerHTML = currentTime;
