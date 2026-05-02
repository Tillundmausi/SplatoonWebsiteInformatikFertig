document.addEventListener('DOMContentLoaded', () => {
  const CDN = 'https://cdn.wikimg.net/en/splatoonwiki/images';

const subIcons = {
  'Klecks-Bombe': `${CDN}/8/81/S3_Weapon_Sub_Splat_Bomb_Flat.png`,
  'Haftbombe': `${CDN}/f/f2/S3_Weapon_Sub_Suction_Bomb_Flat.png`,
  'Blitzbombe': `${CDN}/3/3a/S3_Weapon_Sub_Burst_Bomb_Flat.png`,
  'Sprudelbombe': `${CDN}/c/c4/S3_Weapon_Sub_Fizzy_Bomb_Flat.png`,
  'Autobombe': `${CDN}/6/6d/S3_Weapon_Sub_Autobomb_Flat.png`,
  'Curling-Bombe': `${CDN}/1/11/S3_Weapon_Sub_Curling_Bomb_Flat.png`,
  'Tintenschwamm': `${CDN}/e/e8/S3_Weapon_Sub_Splash_Wall_Flat.png`,
  'Tintenfisch-Bake': `${CDN}/f/f1/S3_Weapon_Sub_Squid_Beakon_Flat.png`,
  'Ortungssensor': `${CDN}/d/dd/S3_Weapon_Sub_Point_Sensor_Flat.png`,
  'Giftnebel': `${CDN}/6/6f/S3_Weapon_Sub_Toxic_Mist_Flat.png`,
  'Tintenmine': `${CDN}/9/90/S3_Weapon_Sub_Ink_Mine_Flat.png`,
  'Torpedo': `${CDN}/0/06/S3_Weapon_Sub_Torpedo_Flat.png`,
  'Sprinkler': `${CDN}/d/de/S3_Weapon_Sub_Sprinkler_Flat.png`,
  'Winkstreifer': `${CDN}/3/3a/S3_Weapon_Sub_Angle_Shooter_Flat.png`,
  'Fritz': `${CDN}/1/12/S3_Weapon_Sub_Smallfry.png`,
};

const specialIcons = {
  'Dreifach-Schwapper': `${CDN}/9/93/S3_Weapon_Special_Trizooka.png`,
  'Tintensturm': `${CDN}/6/69/S3_Weapon_Special_Ink_Storm.png`,
  'Inkjet': `${CDN}/8/80/S3_Weapon_Special_Inkjet.png`,
  'Juhu-Bombe': `${CDN}/0/00/S3_Weapon_Special_Booyah_Bomb.png`,
  'Killer-Wal 5.1': `${CDN}/1/1a/S3_Weapon_Special_Killer_Wail_5.1.png`,
  'Krabbenkran': `${CDN}/8/88/S3_Weapon_Special_Crab_Tank.png`,
  'Riesenspritzdose': `${CDN}/e/ef/S3_Weapon_Special_Big_Bubbler.png`,
  'Tintensauger': `${CDN}/c/cf/S3_Weapon_Special_Ink_Vac.png`,
  'Riffbrecher': `${CDN}/1/10/S3_Weapon_Special_Reefslider.png`,
  'Taktik-Kühler': `${CDN}/c/c0/S3_Weapon_Special_Tacticooler.png`,
  'Zehn-Missile': `${CDN}/3/3b/S3_Weapon_Special_Tenta_Missiles.png`,
  'Dreifach-Tintensturm': `${CDN}/3/3a/S3_Weapon_Special_Triple_Inkstrike.png`,
  'Ultra-Siegel': `${CDN}/7/70/S3_Weapon_Special_Ultra_Stamp.png`,
  'Wellenbrecher': `${CDN}/6/67/S3_Weapon_Special_Wave_Breaker.png`,
  'Tintenrakete': `${CDN}/9/96/S3_Weapon_Special_Zipcaster.png`,
  'Tintentaucher': `${CDN}/2/23/S3_Weapon_Special_Splashdown.png`,
  'Kaiser-Krake': `${CDN}/c/c1/S3_Weapon_Special_Kraken_Royale.png`,
  'Farbschirm': `${CDN}/5/5c/S3_Weapon_Special_Splattercolor_Screen.png`,
  'Super-Trümmer': `${CDN}/8/8c/S3_Weapon_Special_Super_Chump.png`,
  'Dreifach-Tintentaucher': `${CDN}/b/b3/S3_Weapon_Special_Triple_Splashdown.png`,
};

const categoryIcons = {
  shooter: `${CDN}/c/c8/S3_Icon_Shooter.png`,
  roller: `${CDN}/f/fb/S3_Icon_Roller.png`,
  charger: `${CDN}/a/a0/S3_Icon_Charger.png`,
  slosher: `${CDN}/2/2f/S3_Icon_Slosher.png`,
  splatling: `${CDN}/a/af/S3_Icon_Splatling.png`,
  blaster: `${CDN}/5/5b/S3_Icon_Blaster.png`,
  brush: `${CDN}/7/77/S3_Icon_Brush.png`,
  brella: `${CDN}/0/0d/S3_Icon_Brella.png`,
};

const weapons = [
  // Shooter
  { name: 'Splattershot', category: 'shooter', damage: 70, range: 50, fireRate: 75, sub: 'Klecks-Bombe', special: 'Dreifach-Schwapper', icon: `${CDN}/b/bf/S3_Weapon_Main_Splattershot.png` },
  { name: 'Splattershot Jr.', category: 'shooter', damage: 55, range: 42, fireRate: 80, sub: 'Klecks-Bombe', special: 'Tintensturm', icon: `${CDN}/1/1e/S3_Weapon_Main_Splattershot_Jr..png` },
  { name: 'Tentatek Splattershot', category: 'shooter', damage: 70, range: 50, fireRate: 75, sub: 'Klecks-Bombe', special: 'Inkjet', icon: `${CDN}/f/f1/S3_Weapon_Main_Tentatek_Splattershot.png` },
  { name: '.52 Gal', category: 'shooter', damage: 85, range: 55, fireRate: 55, sub: 'Tintenschwamm', special: 'Tintensturm', icon: `${CDN}/e/ed/S3_Weapon_Main_.52_Gal.png` },
  { name: "N-ZAP '85", category: 'shooter', damage: 55, range: 48, fireRate: 80, sub: 'Haftbombe', special: 'Tintensturm', icon: `${CDN}/f/f6/S3_Weapon_Main_N-ZAP_%2785.png` },
  { name: 'Splattershot Pro', category: 'shooter', damage: 75, range: 65, fireRate: 55, sub: 'Klecks-Bombe', special: 'Inkjet', icon: `${CDN}/7/77/S3_Weapon_Main_Splattershot_Pro.png` },
  { name: 'Aerospray MG', category: 'shooter', damage: 40, range: 35, fireRate: 95, sub: 'Klecks-Bombe', special: 'Juhu-Bombe', icon: `${CDN}/c/c5/S3_Weapon_Main_Aerospray_MG.png` },
  { name: 'Sploosh-o-matic', category: 'shooter', damage: 80, range: 25, fireRate: 85, sub: 'Tintenfisch-Bake', special: 'Killer-Wal 5.1', icon: `${CDN}/5/59/S3_Weapon_Main_Sploosh-o-matic.png` },
  { name: 'Splash-o-matic', category: 'shooter', damage: 60, range: 45, fireRate: 78, sub: 'Blitzbombe', special: 'Inkjet', icon: `${CDN}/7/7b/S3_Weapon_Main_Splash-o-matic.png` },
  { name: 'Squeezer', category: 'shooter', damage: 65, range: 60, fireRate: 50, sub: 'Tintenschwamm', special: 'Dreifach-Schwapper', icon: `${CDN}/c/cb/S3_Weapon_Main_Squeezer.png` },
  { name: 'H-3 Nozzlenose', category: 'shooter', damage: 90, range: 60, fireRate: 35, sub: 'Ortungssensor', special: 'Juhu-Bombe', icon: `${CDN}/5/5a/S3_Weapon_Main_H-3_Nozzlenose.png` },
  { name: 'L-3 Nozzlenose', category: 'shooter', damage: 65, range: 50, fireRate: 70, sub: 'Winkstreifer', special: 'Killer-Wal 5.1', icon: `${CDN}/2/2c/S3_Weapon_Main_L-3_Nozzlenose.png` },
  { name: 'Jet Squelcher', category: 'shooter', damage: 65, range: 78, fireRate: 40, sub: 'Klecks-Bombe', special: 'Inkjet', icon: `${CDN}/6/69/S3_Weapon_Main_Jet_Squelcher.png` },
  { name: 'Dualie Squelchers', category: 'shooter', damage: 60, range: 70, fireRate: 50, sub: 'Klecks-Bombe', special: 'Tintensturm', icon: `${CDN}/5/5a/S3_Weapon_Main_Dualie_Squelchers.png` },
  { name: "N-ZAP '89", category: 'shooter', damage: 55, range: 48, fireRate: 80, sub: 'Autobombe', special: 'Killer-Wal 5.1', icon: `${CDN}/9/98/S3_Weapon_Main_N-ZAP_%2789.png` },
  { name: 'Forge Splattershot Pro', category: 'shooter', damage: 75, range: 65, fireRate: 55, sub: 'Haftbombe', special: 'Juhu-Bombe', icon: `${CDN}/d/d8/S3_Weapon_Main_Forge_Splattershot_Pro.png` },
  { name: 'Annaki Splattershot Nova', category: 'shooter', damage: 70, range: 50, fireRate: 75, sub: 'Sprudelbombe', special: 'Killer-Wal 5.1', icon: `${CDN}/c/c5/S3_Weapon_Main_Annaki_Splattershot_Nova.png` },

  // Roller
  { name: 'Splat Roller', category: 'roller', damage: 90, range: 30, fireRate: 40, sub: 'Haftbombe', special: 'Killer-Wal 5.1', icon: `${CDN}/c/c7/S3_Weapon_Main_Splat_Roller.png` },
  { name: 'Krak-On Splat Roller', category: 'roller', damage: 90, range: 30, fireRate: 40, sub: 'Tintenfisch-Bake', special: 'Krabbenkran', icon: `${CDN}/6/60/S3_Weapon_Main_Krak-On_Splat_Roller.png` },
  { name: 'Carbon Roller', category: 'roller', damage: 75, range: 25, fireRate: 60, sub: 'Autobombe', special: 'Dreifach-Schwapper', icon: `${CDN}/2/21/S3_Weapon_Main_Carbon_Roller.png` },
  { name: 'Dynamo Roller', category: 'roller', damage: 95, range: 45, fireRate: 20, sub: 'Klecks-Bombe', special: 'Tintensturm', icon: `${CDN}/5/5e/S3_Weapon_Main_Dynamo_Roller.png` },
  { name: 'Gold Dynamo Roller', category: 'roller', damage: 95, range: 45, fireRate: 20, sub: 'Tintenschwamm', special: 'Inkjet', icon: `${CDN}/f/f8/S3_Weapon_Main_Gold_Dynamo_Roller.png` },
  { name: 'Flingza Roller', category: 'roller', damage: 80, range: 35, fireRate: 35, sub: 'Haftbombe', special: 'Dreifach-Tintensturm', icon: `${CDN}/d/d2/S3_Weapon_Main_Flingza_Roller.png` },
  { name: 'Big Swig Roller', category: 'roller', damage: 70, range: 50, fireRate: 30, sub: 'Sprudelbombe', special: 'Juhu-Bombe', icon: `${CDN}/8/8e/S3_Weapon_Main_Big_Swig_Roller.png` },

  // Charger
  { name: 'Splat Charger', category: 'charger', damage: 95, range: 90, fireRate: 15, sub: 'Klecks-Bombe', special: 'Killer-Wal 5.1', icon: `${CDN}/4/41/S3_Weapon_Main_Splat_Charger.png` },
  { name: 'Splatterscope', category: 'charger', damage: 95, range: 92, fireRate: 15, sub: 'Klecks-Bombe', special: 'Killer-Wal 5.1', icon: `${CDN}/b/b2/S3_Weapon_Main_Splatterscope.png` },
  { name: 'E-liter 4K', category: 'charger', damage: 98, range: 96, fireRate: 8, sub: 'Tintenschwamm', special: 'Tintensturm', icon: `${CDN}/1/10/S3_Weapon_Main_E-liter_4K.png` },
  { name: 'E-liter 4K Scope', category: 'charger', damage: 98, range: 98, fireRate: 8, sub: 'Tintenschwamm', special: 'Tintensturm', icon: `${CDN}/e/eb/S3_Weapon_Main_E-liter_4K_Scope.png` },
  { name: 'Bamboozler 14 Mk I', category: 'charger', damage: 70, range: 78, fireRate: 35, sub: 'Autobombe', special: 'Inkjet', icon: `${CDN}/6/6d/S3_Weapon_Main_Bamboozler_14_Mk_I.png` },
  { name: 'Goo Tuber', category: 'charger', damage: 85, range: 75, fireRate: 20, sub: 'Haftbombe', special: 'Dreifach-Schwapper', icon: `${CDN}/8/8a/S3_Weapon_Main_Goo_Tuber.png` },
  { name: 'Classic Squiffer', category: 'charger', damage: 80, range: 65, fireRate: 30, sub: 'Ortungssensor', special: 'Juhu-Bombe', icon: `${CDN}/3/3c/S3_Weapon_Main_Classic_Squiffer.png` },
  { name: 'Snipewriter 5H', category: 'charger', damage: 65, range: 85, fireRate: 25, sub: 'Winkstreifer', special: 'Dreifach-Tintensturm', icon: `${CDN}/3/34/S3_Weapon_Main_Snipewriter_5H.png` },

  // Slosher
  { name: 'Slosher', category: 'slosher', damage: 85, range: 55, fireRate: 40, sub: 'Klecks-Bombe', special: 'Tintensturm', icon: `${CDN}/4/42/S3_Weapon_Main_Slosher.png` },
  { name: 'Sloshing Machine', category: 'slosher', damage: 80, range: 58, fireRate: 45, sub: 'Sprudelbombe', special: 'Juhu-Bombe', icon: `${CDN}/3/38/S3_Weapon_Main_Sloshing_Machine.png` },
  { name: 'Tri-Slosher', category: 'slosher', damage: 70, range: 40, fireRate: 55, sub: 'Winkstreifer', special: 'Dreifach-Schwapper', icon: `${CDN}/d/dc/S3_Weapon_Main_Tri-Slosher.png` },
  { name: 'Bloblobber', category: 'slosher', damage: 75, range: 60, fireRate: 50, sub: 'Haftbombe', special: 'Krabbenkran', icon: `${CDN}/4/41/S3_Weapon_Main_Bloblobber.png` },
  { name: 'Dread Wringer', category: 'slosher', damage: 82, range: 55, fireRate: 38, sub: 'Giftnebel', special: 'Killer-Wal 5.1', icon: `${CDN}/6/6c/S3_Weapon_Main_Dread_Wringer.png` },

  // Splatling
  { name: 'Heavy Splatling', category: 'splatling', damage: 80, range: 70, fireRate: 90, sub: 'Tintenschwamm', special: 'Inkjet', icon: `${CDN}/5/5e/S3_Weapon_Main_Heavy_Splatling.png` },
  { name: 'Mini Splatling', category: 'splatling', damage: 60, range: 55, fireRate: 85, sub: 'Blitzbombe', special: 'Tintensturm', icon: `${CDN}/8/86/S3_Weapon_Main_Mini_Splatling.png` },
  { name: 'Hydra Splatling', category: 'splatling', damage: 90, range: 80, fireRate: 95, sub: 'Klecks-Bombe', special: 'Juhu-Bombe', icon: `${CDN}/d/d1/S3_Weapon_Main_Hydra_Splatling.png` },
  { name: 'Ballpoint Splatling', category: 'splatling', damage: 70, range: 72, fireRate: 88, sub: 'Sprudelbombe', special: 'Killer-Wal 5.1', icon: `${CDN}/f/f9/S3_Weapon_Main_Ballpoint_Splatling.png` },
  { name: 'Nautilus 47', category: 'splatling', damage: 65, range: 60, fireRate: 82, sub: 'Haftbombe', special: 'Inkjet', icon: `${CDN}/8/81/S3_Weapon_Main_Nautilus_47.png` },
  { name: 'Heavy Splatling Deco', category: 'splatling', damage: 80, range: 70, fireRate: 90, sub: 'Ortungssensor', special: 'Dreifach-Tintensturm', icon: `${CDN}/f/fc/S3_Weapon_Main_Heavy_Splatling_Deco.png` },

  // Blaster
  { name: 'Blaster', category: 'blaster', damage: 85, range: 45, fireRate: 30, sub: 'Klecks-Bombe', special: 'Dreifach-Schwapper', icon: `${CDN}/a/a7/S3_Weapon_Main_Blaster.png` },
  { name: 'Luna Blaster', category: 'blaster', damage: 90, range: 28, fireRate: 40, sub: 'Klecks-Bombe', special: 'Krabbenkran', icon: `${CDN}/5/59/S3_Weapon_Main_Luna_Blaster.png` },
  { name: 'Range Blaster', category: 'blaster', damage: 80, range: 65, fireRate: 18, sub: 'Tintenschwamm', special: 'Inkjet', icon: `${CDN}/1/1d/S3_Weapon_Main_Range_Blaster.png` },
  { name: 'Clash Blaster', category: 'blaster', damage: 65, range: 38, fireRate: 55, sub: 'Haftbombe', special: 'Tintensturm', icon: `${CDN}/2/2f/S3_Weapon_Main_Clash_Blaster.png` },
  { name: 'Rapid Blaster', category: 'blaster', damage: 70, range: 60, fireRate: 35, sub: 'Winkstreifer', special: 'Killer-Wal 5.1', icon: `${CDN}/6/6a/S3_Weapon_Main_Rapid_Blaster.png` },
  { name: 'Rapid Blaster Pro', category: 'blaster', damage: 75, range: 72, fireRate: 22, sub: 'Giftnebel', special: 'Dreifach-Tintensturm', icon: `${CDN}/c/c6/S3_Weapon_Main_Rapid_Blaster_Pro.png` },
  { name: 'Luna Blaster Neo', category: 'blaster', damage: 90, range: 28, fireRate: 40, sub: 'Blitzbombe', special: 'Juhu-Bombe', icon: `${CDN}/1/11/S3_Weapon_Main_Luna_Blaster_Neo.png` },
  { name: "S-BLAST '91", category: 'blaster', damage: 88, range: 42, fireRate: 32, sub: 'Sprudelbombe', special: 'Dreifach-Schwapper', icon: `${CDN}/a/ad/S3_Weapon_Main_S-BLAST_%2791_2D_Current.png` },

  // Brush
  { name: 'Inkbrush', category: 'brush', damage: 50, range: 20, fireRate: 90, sub: 'Klecks-Bombe', special: 'Killer-Wal 5.1', icon: `${CDN}/4/4a/S3_Weapon_Main_Inkbrush.png` },
  { name: 'Octobrush', category: 'brush', damage: 65, range: 28, fireRate: 80, sub: 'Haftbombe', special: 'Krabbenkran', icon: `${CDN}/3/3d/S3_Weapon_Main_Octobrush.png` },
  { name: 'Painbrush', category: 'brush', damage: 70, range: 32, fireRate: 70, sub: 'Sprudelbombe', special: 'Tintensturm', icon: `${CDN}/7/79/S3_Weapon_Main_Painbrush.png` },
  { name: 'Inkbrush Nouveau', category: 'brush', damage: 50, range: 20, fireRate: 90, sub: 'Tintenfisch-Bake', special: 'Juhu-Bombe', icon: `${CDN}/2/2e/S3_Weapon_Main_Inkbrush_Nouveau.png` },

  // Brella
  { name: 'Splat Brella', category: 'brella', damage: 70, range: 50, fireRate: 40, sub: 'Klecks-Bombe', special: 'Dreifach-Schwapper', icon: `${CDN}/2/27/S3_Weapon_Main_Splat_Brella.png` },
  { name: 'Tenta Brella', category: 'brella', damage: 80, range: 55, fireRate: 25, sub: 'Tintenschwamm', special: 'Tintensturm', icon: `${CDN}/1/1e/S3_Weapon_Main_Tenta_Brella.png` },
  { name: 'Undercover Brella', category: 'brella', damage: 55, range: 40, fireRate: 55, sub: 'Blitzbombe', special: 'Inkjet', icon: `${CDN}/5/5d/S3_Weapon_Main_Undercover_Brella.png` },
  { name: 'Recycled Brella 24 Mk I', category: 'brella', damage: 65, range: 48, fireRate: 42, sub: 'Giftnebel', special: 'Killer-Wal 5.1', icon: `${CDN}/d/d0/S3_Weapon_Main_Recycled_Brella_24_Mk_I.png` },
];

const categoryLabels = {
  shooter: 'Shooter',
  roller: 'Roller',
  charger: 'Charger',
  slosher: 'Slosher',
  splatling: 'Splatling',
  blaster: 'Blaster',
  brush: 'Pinsel',
  brella: 'Brella',
};

function createWeaponCard(weapon) {
  const card = document.createElement('div');
  card.className = 'weapon-card';
  card.dataset.category = weapon.category;

  const subIconUrl = subIcons[weapon.sub] || '';
  const specialIconUrl = specialIcons[weapon.special] || '';

  card.innerHTML = `
    <div class="weapon-card-image">
      <img src="${weapon.icon}" alt="${weapon.name}" loading="lazy" />
    </div>
    <div class="weapon-card-header">
      <span class="weapon-name">${weapon.name}</span>
      <span class="weapon-badge">${categoryLabels[weapon.category]}</span>
    </div>
    <div class="weapon-stats">
      <div class="weapon-stat">
        <span class="weapon-stat-label">Schaden</span>
        <div class="weapon-stat-bar"><div class="weapon-stat-fill" style="width: ${weapon.damage}%"></div></div>
        <span class="weapon-stat-value">${weapon.damage}</span>
      </div>
      <div class="weapon-stat">
        <span class="weapon-stat-label">Reichweite</span>
        <div class="weapon-stat-bar"><div class="weapon-stat-fill" style="width: ${weapon.range}%"></div></div>
        <span class="weapon-stat-value">${weapon.range}</span>
      </div>
      <div class="weapon-stat">
        <span class="weapon-stat-label">Feuerrate</span>
        <div class="weapon-stat-bar"><div class="weapon-stat-fill" style="width: ${weapon.fireRate}%"></div></div>
        <span class="weapon-stat-value">${weapon.fireRate}</span>
      </div>
    </div>
    <div class="weapon-sub-special">
      <span class="weapon-sub">
        ${subIconUrl ? `<img src="${subIconUrl}" alt="${weapon.sub}" class="sub-special-icon" loading="lazy" />` : ''}
        ${weapon.sub}
      </span>
      <span class="weapon-special-label">
        ${specialIconUrl ? `<img src="${specialIconUrl}" alt="${weapon.special}" class="sub-special-icon" loading="lazy" />` : ''}
        ${weapon.special}
      </span>
    </div>
  `;

  card.addEventListener('click', () => openModal(weapon));
  return card;
}

function renderWeapons(filter = 'all') {
  const grid = document.getElementById('weaponGrid');
  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? weapons
    : weapons.filter(w => w.category === filter);

  filtered.forEach((weapon, i) => {
    const card = createWeaponCard(weapon);
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    card.style.transition = `opacity 0.4s ease ${i * 0.03}s, transform 0.4s ease ${i * 0.03}s`;
    grid.appendChild(card);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    });
  });
}

function openModal(weapon) {
  const overlay = document.getElementById('weaponModal');
  document.getElementById('modalTitle').textContent = weapon.name;
  document.getElementById('modalCategory').textContent = categoryLabels[weapon.category];

  const modalImage = document.getElementById('modalImage');
  modalImage.innerHTML = `<img src="${weapon.icon}" alt="${weapon.name}" />`;
  modalImage.className = `modal-image modal-image-${weapon.category}`;

  const stats = [
    { label: 'Schaden', value: weapon.damage },
    { label: 'Reichweite', value: weapon.range },
    { label: 'Feuerrate', value: weapon.fireRate },
  ];

  document.getElementById('modalStats').innerHTML = stats.map(s => `
    <div class="modal-stat">
      <span class="modal-stat-label">${s.label}</span>
      <div class="modal-stat-bar"><div class="modal-stat-fill" style="width: ${s.value}%"></div></div>
      <span class="modal-stat-value">${s.value}</span>
    </div>
  `).join('');

  const subIconUrl = subIcons[weapon.sub] || '';
  const specialIconUrl = specialIcons[weapon.special] || '';

  document.getElementById('modalSub').innerHTML = `
    <h4>Sub</h4>
    <p>${subIconUrl ? `<img src="${subIconUrl}" alt="${weapon.sub}" class="modal-sub-special-icon" />` : ''}${weapon.sub}</p>
  `;
  document.getElementById('modalSpecial').innerHTML = `
    <h4>Spezial</h4>
    <p>${specialIconUrl ? `<img src="${specialIconUrl}" alt="${weapon.special}" class="modal-sub-special-icon" />` : ''}${weapon.special}</p>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('weaponModal').classList.remove('active');
  document.body.style.overflow = '';
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderWeapons(btn.dataset.filter);
  });
});

// Category cards -> filter
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    const cat = card.dataset.category;
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === cat);
    });
    renderWeapons(cat);
    document.getElementById('arsenal').scrollIntoView({ behavior: 'smooth' });
  });
});

// Modal close
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('weaponModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Mobile nav toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// Stat counter animation
function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1500;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  });
}

// Intersection observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('stats-bar')) {
        animateCounters();
      }
      entry.target.querySelectorAll('.category-card, .special-card').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          });
        });
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.categories, .specials, .stats-bar').forEach(section => {
  observer.observe(section);
});

// Initial render
renderWeapons();
