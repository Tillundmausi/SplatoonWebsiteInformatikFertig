// Prevent double execution (Hauptfix für deinen Fehler)
if (window.__SPLATOON_WEAPONS_APP__) {
  console.warn("main.js already initialized – skipping duplicate load");
} else {
  window.__SPLATOON_WEAPONS_APP__ = true;

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
    // (dein kompletter weapons-array bleibt 1:1 unverändert)
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
          ${subIconUrl ? `<img src="${subIconUrl}" class="sub-special-icon" />` : ''}
          ${weapon.sub}
        </span>
        <span class="weapon-special-label">
          ${specialIconUrl ? `<img src="${specialIconUrl}" class="sub-special-icon" />` : ''}
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
      grid.appendChild(card);
    });
  }

  function openModal(weapon) {
    const overlay = document.getElementById('weaponModal');
    document.getElementById('modalTitle').textContent = weapon.name;
    document.getElementById('modalCategory').textContent = categoryLabels[weapon.category];

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('weaponModal').classList.remove('active');
    document.body.style.overflow = '';
  }

  // Events
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWeapons(btn.dataset.filter);
    });
  });

  document.getElementById('modalClose').addEventListener('click', closeModal);

  document.getElementById('weaponModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Initial render
  renderWeapons();
}
