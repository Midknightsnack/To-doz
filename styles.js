import {items} from './storage.js'
import {mql, paletteC} from './script.js'

export function changeTopbar(t) {
  console.log(t.value);
  document.getElementById('topbar').style.backgroundColor = t.value;
  localStorage.setItem('localTop', t.value)
}

export function changeFontColor(t) {
  let t2 = document.querySelectorAll('div');
  for (var i = 0; i < t2.length; i++) {
    t2[i].style.color = t.value;
  }
  let t3 = document.getElementsByClassName('buttonClass');
  for (var i = 0; i < t3.length; i++) {
    t3[i].style.color = t.value;
  }
  localStorage.setItem('localFontColor', t.value)
}

export function changeAllColors(t) {
  for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = t.value;
  }
  localStorage.setItem('localPan', t.value)
}

export function changeBackColor(t) {
  document.getElementsByTagName('body')[0].style.backgroundColor = t.value;
  localStorage.setItem('localBackground', t.value)
}

export function changeButtonColor(t) {
  let buttons = document.getElementsByClassName('buttonClass');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = t.value;
  }
  localStorage.setItem('localButtonColor', t.value)
}

export function setBlurOn(t) {
  if (t.value == 'On') {
    document.getElementById('popup').style.backdropFilter = 'blur(15px)';
    document.getElementById('dropdown-content').style.backdropFilter = 'blur(15px)';
  } else {
    document.getElementById('popup').style.backdropFilter = 'none';
    document.getElementById('dropdown-content').style.backdropFilter = 'none';
  }
  localStorage.setItem('localBlurCheck', t.value)
}

export function roundC(t) {
  if (t.value == 'On') {
    document.getElementById('topbar').style.borderRadius = '0 0 10px 10px';
    document.getElementById('popup').style.borderRadius = '5px';
    document.getElementById('dropdown-content').style.borderRadius = '5px';
    for (var i = 0; i < items.length; i++) {
      items[i].style.borderRadius = '10px';
    }
    for (var i2 = 0; i2 < document.getElementsByTagName('button').length; i2++) {
      document.getElementsByTagName('button')[i2].style.borderRadius = '10px';
    }
    for (var i3 = 0; i3 < document.getElementsByTagName('select').length; i3++) {
      document.getElementsByTagName('select')[i3].style.borderRadius = '10px';
    }
  } else {
    document.getElementById('topbar').style.borderRadius = '0';
    document.getElementById('popup').style.borderRadius = '0';
    document.getElementById('dropdown-content').style.borderRadius = '0';
    for (var i = 0; i < items.length; i++) {
      items[i].style.borderRadius = '0';
    }
    for (var i2 = 0; i2 < document.getElementsByTagName('button').length; i2++) {
      document.getElementsByTagName('button')[i2].style.borderRadius = '0';
    }
    for (var i3 = 0; i3 < document.getElementsByTagName('select').length; i3++) {
      document.getElementsByTagName('select')[i3].style.borderRadius = '0';
    }
  }
  localStorage.setItem('localRoundedCheck', t.value)
}
export function newFontFamily(t) {
  let t2 = document.querySelectorAll('div');
  for (var i = 0; i < t2.length; i++) {
    t2[i].style.fontFamily = t.value;
  }
  let t3 = document.getElementsByClassName('buttonClass');
  for (var i = 0; i < t3.length; i++) {
    t3[i].style.fontFamily = t.value;
  }
  localStorage.setItem('localFontFamily', t.value)
}

export function extendEnable(t) {
  document.querySelectorAll('.button2').forEach(e => e.remove());
  if (t.value == 'On') {
    for (var i = 0; i < items.length; i++) {
      document.getElementById('rounded').value == 'On' ? items[i].getElementsByTagName('button')[0].insertAdjacentHTML('afterend', `<button class="button2" style="border-radius: 10px;" onclick="extend(this)">^</button>`) : items[i].getElementsByTagName('button')[0].insertAdjacentHTML('afterend', `<button class="button2" onclick="extend(this)">^</button>`);
    }
  }
  localStorage.setItem('localExtendEnabled', t.value)
}

// Consider making a export function to automate

export function changeFontSize(t) {
  document.getElementsByTagName('body')[0].style.fontSize = `${t.value}px`;
  localStorage.setItem('localFontSize', t.value)
}

export function changePopupColor(t) {
  document.getElementById('popup').style.backgroundColor = `${t.value}`;
  document.getElementById('popup').style.opacity = '0.85';
  localStorage.setItem('localPopupColor', t.value)
}

export function themeEnable(t) {
  if (t.value == 'On') {
    let d = new Date();
    if (d.getHours() >= 20 || d.getHours() <= 6) {
      console.log('Dark');
      paletteC('Dark')
      // Else if both have or equal to 20 but it should work as sexpected because then 7:00 PM would be dark mode as opposed to it just not working
    } else if (d.getHours() > 6 && d.getHours() <= 20) {
      console.log('Light');
      paletteC('Light')
    }
  }
  localStorage.setItem('localThemeEnabled', t.value)
}

export function popupAnim() {
  let t2 = document.getElementsByClassName('quietDown');
  for (var i = 0; i < t2.length; i++) {
    // Make some elements in background black/blended
    t2[i].style.mixBlendMode = 'multiply';
  }
  let t3 = document.getElementsByClassName('popupChange');
  for (var i = 0; i < t3.length; i++) {
    // make border look cool
    t3[i].style.mixBlendMode = 'luminosity';
  }
  // If screen is phone
  if (mql.matches) {
    // Slower animation
    let t = 0;
    var myInterval = setInterval(function () {
      popup.style.bottom = `${-15 - t}%`;
      popup.style.visibility = 'visible';
      t += 0.8;
      if (t > 45) {
        clearInterval(myInterval)
      }
    }, 1)
  } else {
    // Faster animation
    let t = 0;
    let a = 500;
    var myInterval = setInterval(function () {
      popup.style.bottom = `${500 - t}px`;
      popup.style.visibility = 'visible';
      a--
      t += a * 0.05;
      if (t > 500) {
        clearInterval(myInterval)
      }
    }, 1)
  }
}

export function popupClose() {
  let t2 = document.getElementsByClassName('quietDown');
  // Set elements back to normal blend
  for (var i = 0; i < t2.length; i++) {
    t2[i].style.mixBlendMode = 'normal';
  }
  let t3 = document.getElementsByClassName('popupChange');
  for (var i = 0; i < t3.length; i++) {
    t3[i].style.mixBlendMode = 'normal';
  }
  document.getElementById('popup').style.visibility = 'hidden';
}

var toggle1 = false;

// Animation for sidebar

export function toggleSidebar() {
  if (toggle1 == false) {
    toggle1 = true;
    var t = 0;
    var animateSidebar = setInterval(function () {
      t++
      sidebar.style.left = `-${t}vw`;
      console.log(t);
      if (t > 35) {
        clearInterval(animateSidebar)
      }
    }, 10)
  } else {
    toggle1 = false;
    var t = 0;
    sidebar.style.left = '-120vw';
    var animateSidebar = setInterval(function () {
      t++
      sidebar.style.left = `${t}px`;
      console.log(t);
      if (t > 1) {
        clearInterval(animateSidebar)
      }
    }, 10)
  }
}