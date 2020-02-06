new Vue({
  el: "#app",
  data: {
    startgame: false,
    playerHealth: 100,
    monsterHealth: 100,
    log: []
  },
  methods: {
    startGameFunc() {
      this.startgame = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.log = [];
    },
    attack(type) {
      console.log(type);

      if (type === "normal") {
        var playerAttack = Math.floor(Math.random() * 10) + 1;
      } else if (type === "special") {
        var playerAttack = Math.floor(Math.random() * 16) + 5;
      }

      var monsterAttack = Math.floor(Math.random() * 10) + 1;

      this.playerHealth -= monsterAttack;
      this.monsterHealth -= playerAttack;

      this.log.push(
        `<li class="monster-turn">Monster Hits player for ${monsterAttack}</li>`
      );
      this.log.push(
        `<li class="player-turn">Player ${type} Hits Monster for ${playerAttack}</li>`
      );

      if (this.monsterHealth <= 0 && this.monsterHealth < this.playerHealth) {
        alert("Player wins");
        this.giveUp();
      } else if (
        this.playerHealth <= 0 &&
        this.playerHealth < this.monsterHealth
      ) {
        alert("Monster wins");
        this.giveUp();
      }
    },
    healPlayer() {
      var playerHealValue = Math.floor(Math.random() * 16) + 5;

      let checkHealVal = (this.playerHealth += playerHealValue);

      if (checkHealVal < 100) {
        this.playerHealth += playerHealValue;
        this.log.push(
          `<li class="player-turn">Player Healed for ${playerHealValue}</li>`
        );
      } else if (checkHealVal > 100) {
        this.playerHealth = 100;
      } else {
        alert("Energy is fully restored");
      }
    },
    giveUp() {
      this.startgame = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.log = [];
    }
  }
});
