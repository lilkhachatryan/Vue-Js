<template>
    <b-container>
        <b-row>
            <b-col>
                <div class="mb-3">You</div>
                <div class="progress-bar-container">
                    <div class="progress-bar" :style="youStyles"></div>
                    <div class="points">{{ youPoints }}</div>
                </div>
            </b-col>
            <b-col>
                <div class="mb-3">Monster</div>
                <div class="progress-bar-container">
                    <div class="progress-bar" :style="monsterStyles"></div>
                    <div class="points">{{ monsterPoints }}</div>
                </div>
            </b-col>
        </b-row>
        <b-card class="mt-4">
            <div v-if="!isNewGame" class="btn-container">
                <b-button variant="danger"
                          @click="attack">Attack</b-button>
                <b-button variant="warning"
                          @click="specialAttack">Special Attack</b-button>
                <b-button variant="success"
                          :disabled="youPoints === 100"
                          @click="heal">Heal</b-button>
                <b-button variant="light"
                          @click="isNewGame = true">Give Up</b-button>
            </div>
            <b-button v-else
                      variant="success"
                      size="sm"
                      @click="reset">Start new game</b-button>
        </b-card>
        <b-card class="mt-4" v-if="steps[0]">
            <div v-for="(step, index) in steps"
                :key="index + 'step'"
                :class="{ player: step.isPlayer, monster: !step.isPlayer }">{{ step.msg }}</div>
        </b-card>
    </b-container>
</template>
<script>
export default {
    name: 'MonsterSlayer',
    data: () => ({
        isNewGame: true,
        steps: [],
        youPoints: 100,
        monsterPoints: 100
    }),
    computed: {
        youStyles() {
            return ({
                width: this.youPoints + '%',
                borderRadius: this.youPoints === 100 ? '5px' : '5px 0 0 5px'
            })
        },
        monsterStyles() {
            return ({
                width: this.monsterPoints + '%',
                borderRadius: this.youPoints === 100 ? '5px' : '5px 0 0 5px'

            })
        }
    },
    methods: {
        reset() {
            this.steps = [];
            this.isNewGame = false;
            this.youPoints = 100;
            this.monsterPoints = 100;
        },
        attack() {
            this.monsterAttacks();
            this.playerAttacks();
            this.checkWin();
        },
        heal() {
            this.monsterAttacks();

            let healPoint = this.calculateDamage(undefined, 5);
            this.youPoints += + healPoint;
            if (this.youPoints > 100) this.youPoints = 100;

            this.addStep(healPoint, true, true);
        },
        specialAttack() {
            this.monsterAttacks(21);
            this.playerAttacks(21);
            this.checkWin();
        },
        calculateDamage(max = 11, min = 3) {
            return Math.max(Math.floor(Math.random() * max), min);
        },
        monsterAttacks(to = 11) {
            let randomPointYou = this.calculateDamage(to);
            this.youPoints -= randomPointYou;
            this.addStep(randomPointYou, false);
        },
        playerAttacks (to = 11) {
            let randomPointMonster = this.calculateDamage(to);
            this.monsterPoints -= randomPointMonster;
            this.addStep(randomPointMonster, true);
        },
        addStep(points, isPlayer, isHeal) {
            let stepMsg = isPlayer ? 'Player ' : 'Monster ';
            stepMsg += isHeal ? 'heals ' : 'hits ';
            stepMsg += `for ${points}`;
            this.steps = [...this.steps, { msg: stepMsg, isPlayer }];
        },
        checkWin() {
            let winner = null;
            if (this.monsterPoints <= 0) {
                winner = 'You'
            } else if (this.youPoints <= 0) {
                winner = 'Monster'
            }

            if (winner) {
                alert(`${winner} win.`);
                this.isNewGame = true;
                // this.reset()
            }
        }
    }
}
</script>
<style lang="scss">
    .progress-bar-container {
        width: 100%;
        height: 4vh;
        background-color: lightgray;
        border-radius: 5px;
        .progress-bar {
            height: 100%;
            background-color: #42b983;
            border-radius: 5px 0 0 5px;
        }
        .points {
            position: relative;
            top: -24px;
        }
    }
    .btn-container {
        .btn {
            &:nth-child(n):not(:last-child) {
                margin-right: 8px;
            }
            &:focus {
                box-shadow: none;
            }
        }
    }
    .player {
        background-color: coral;
    }
    .monster {
        background-color: lightseagreen;
    }
</style>
