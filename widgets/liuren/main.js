import { LiuRen, Key } from '../../src';

const keys = {
  dZ: Key.Zhi,
  tG: Key.Gan,
  lQ: Key.LiuQin,
  tJ: Key.TianJiang,
  tJ2: Key.TianJiang2,
};

function update() {
  const d = document.getElementById('date-input').value;
  const t = document.getElementById('time-input').value;
  const r = new LiuRen(new Date(d + t + ':00'));
  document.getElementById('jiang-input').value = r.data.yueJiang;

  const pillars = document.getElementById('pillars').children;
  const pillars_data = [
    `${keys.tG[r.pillars.sGan]}${keys.dZ[r.pillars.sZhi]}時`,
    `${keys.tG[r.pillars.rGan]}${keys.dZ[r.pillars.rZhi]}日`,
    `${keys.tG[r.pillars.mGan]}${keys.dZ[r.pillars.mZhi]}月`,
    `${keys.tG[r.pillars.yGan]}${keys.dZ[r.pillars.yZhi]}年`,
  ];
  for (let i = 0; i < pillars.length; i++) {
    pillars[i].innerHTML =
      `<span class="n">${pillars_data[i][0]}</span>` +
      `<span class="n">${pillars_data[i][1]}</span>` +
      `<span class="n">${pillars_data[i][2]}</span>`;
  }

  const c3 = document.getElementById('c3').children;
  const cz = r.chuan.zhi.map((i) => keys.dZ[i]);
  const cg = r.chuan.gan.map((i) => (i < 0 ? '　' : keys.tG[i]));
  const cq = r.chuan.qin.map((i) => keys.lQ[i]);
  const cj = r.chuan.jiang.map((i) => keys.tJ[i]);
  const ck = r.chuan.kong.map((i) => (i < 0 ? '⭗' : '　'));
  for (let i = 0; i < 3; i++) {
    c3[i].innerHTML =
      `<span class="n">&emsp;${'初中末'[i]}</span>` +
      '<span>' +
      `<span class="s q">${cq[i]}</span>&nbsp` +
      `<span class="z">${cz[i]}</span>&nbsp` +
      `<span class="s g">${cg[i]}</span>` +
      '</span>' +
      '<span>' +
      `<span class="j">${cj[i]}</span>` +
      `<span class="s">${ck[i]}</span>` +
      '</span>';
  }

  const k4 = document.getElementById('k4').children;
  const kh = r.ke.heaven.map((i) => keys.dZ[i]);
  const ke = r.ke.earth.map((i) => keys.dZ[i]);
  const kj = r.ke.jiang.map((i) => keys.tJ[i]);
  for (let i = 3; i >= 0; i--) {
    k4[3 - i].innerHTML =
      `<span class="j">${kj[i]}</span>` +
      `<span class="n">${kh[i]}</span>` +
      `<span class="n">${i ? ke[i] : keys.tG[r.ke.rGan]}</span>`;
  }

  const td = document.getElementById('td').children;
  const pz = r.pan.zhi.map((i) => keys.dZ[i]);
  const pg = r.pan.gan.map((i) => (i < 0 ? '　' : keys.tG[i]));
  const pj = r.pan.jiang.map((i) => keys.tJ2[i]);
  for (let i = 0; i < 12; i++) {
    td[i].innerHTML =
      `<span class="z">${pz[i]}</span>` +
      `<span class="g">${pg[i]}</span>` +
      `<span class="j">${pj[i]}</span>`;
    if (r.pan.xunkong.includes(i)) {
      td[i].classList.add('kong');
    } else {
      td[i].classList.remove('kong');
    }
  }
  const time = new Date();
  const mm = ('0' + (time.getMonth() + 1)).slice(-2);
  const dd = ('0' + time.getDate()).slice(-2);
  document.getElementById('note-box').value =
    `\n\n${time.getFullYear()}/${mm}/${dd}\n` +
    `${('0' + time.getHours()).slice(-2)}:` +
    `${('0' + time.getMinutes()).slice(-2)}\n` +
    `${r.chuan.method}課`;
}

function init() {
  // initialize input fields
  const time = new Date();
  const d_input = document.getElementById('date-input');
  const t_input = document.getElementById('time-input');
  const mm = ('0' + (time.getMonth() + 1)).slice(-2);
  const dd = ('0' + time.getDate()).slice(-2);
  const h = time.getHours() + (time.getHours() % 2);
  d_input.value = time.getFullYear() + '-' + mm + '-' + dd;
  t_input.value = 'T' + ('0' + h).slice(-2);
  d_input.addEventListener('change', () => update());
  t_input.addEventListener('change', () => update());

  // initialize dom
  const pillars = document.getElementById('pillars');
  for (let i = 0; i < 4; i++) {
    pillars.innerHTML += '<div class="pillar"></div>';
  }
  const c3 = document.getElementById('c3');
  for (let i = 0; i < 3; i++) {
    c3.innerHTML += '<div class="chuan"></div>';
  }
  const k4 = document.getElementById('k4');
  for (let i = 0; i < 4; i++) {
    k4.innerHTML += '<div class="ke"></div>';
  }
  const td = document.getElementById('td');
  for (let i = 0; i < 12; i++) {
    td.innerHTML += `<div id="cell-${i}" class="cell"></div>`;
  }
  td.innerHTML += '<textarea id="note-box" maxlength="120"></textarea>';

  // render info
  update();
}

init();
