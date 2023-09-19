// Mmebuat class player
class Player {
  constructor(_name, _health = 100, _power = 10) {
    this.name = _name;
    this.health = _health;
    this.power = _power;
  }

  hit(power) {
    this.health -= power;
  }

  useItem(item) {
    this.health += item.health;
    this.power += item.power;

    if (item.health > 0) {
      console.log(`${this.name} menggunakan item untuk menambah kesehatan.`);
    } else if (item.power > 0) {
      console.log(`${this.name} menggunakan item untuk menambah kekuatan.`);
    } else {
      console.log(`${this.name} tidak mendapatkan item.`);
    }
  }

  showStatus() {
    console.log(
      `${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

// Membuat alur game
class ShootingGame {
  constructor(player1, player2) {
    this.players = [player1, player2];
  }

  getRandomItem() {
    const randomAmunisi = Math.random();
    let item = {};

    if (randomAmunisi < 0.5) {
      item.health = 10;
      item.power = 0;
    } else {
      item.health = 0;
      item.power = 10;
    }

    return item;
  }
  // Memulai permainan
  start() {
    let suhu = 0;
    let selesaiRiwayatmu = false;

    while (!selesaiRiwayatmu) {
      const pemain = this.players[suhu];
      const teman = this.players[1 - suhu];

      console.log("=============================================");
      console.log("Status Sebelum Menembak:");
      console.log(`${this.players[0].name} => ${this.players[0].showStatus()}`);
      console.log(`${this.players[1].name} => ${this.players[1].showStatus()}`);

      const currentItem = this.getRandomItem();
      pemain.useItem(currentItem);

      console.log("\n=============================================");
      console.log("Status Setelah Menembak:");
      console.log(`${this.players[0].name} => ${this.players[0].showStatus()}`);
      console.log(`${this.players[1].name} => ${this.players[1].showStatus()}`);

      const damage = pemain.power;
      teman.hit(damage);

      console.log(
        `\n${pemain.name} menyerang ${teman.name} dengan power ${damage}`
      );
      console.log(
        `${teman.name} sekarang memiliki sisa kesehatan ${teman.health}\n`
      );

      if (teman.health < 0) {
        console.log(`Permainan Selesai! ${pemain.name} adalah pemenangnya!`);
        selesaiRiwayatmu = true;
      }

      suhu = 1 - suhu;
    }
  }
}

// Membuat objek pemain
const captainAmerica = new Player("Captain America");
const redSkull = new Player("Red Skull");

// Membuat objek permainan
const shootingGame = new ShootingGame(captainAmerica, redSkull);

// Memulai permainan
shootingGame.start();
