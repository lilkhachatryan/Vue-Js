<template>
    <transition @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @enter-cancelled="enterCancelled"
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                @leave-cancelled="leaveCancelled"
                :css="false">
        <div class="bar" v-if="load"></div>
    </transition>
</template>

<script>
    export default {
        name: 'ProgressBar',
        props: {
            load: Boolean
        },
        data: () => ({
           // round: 20,
           elementWidth: 10
        }),
        methods: {
            beforeEnter (el) {
                console.log('beforeEnter', el);
                this.elementWidth = 10;
                el.style.width = this.elementWidth;
            },
            enter (el, done) {
                console.log('enter', el);
                let round = 1;
                const interval = setInterval(() => {
                   el.style.width = (this.elementWidth + round * 10) + 'px';
                   round++;
                   if (round > 20) {
                       clearInterval(interval);
                       done();
                   }
                }, 30);
                done();
            },
            afterEnter (el) {
                console.log('afterEnter', el);
            },
            enterCancelled (el) {
                console.log('enterCancelled', el);
            },
            beforeLeave (el) {
                console.log('beforeLeave', el);
                this.elementWidth = 210;
                el.style.width = this.elementWidth;
            },
            leave (el, done) {
                console.log('leave', el);
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 30);
            },
            afterLeave (el) {
                console.log('afterLeave', el);
            },
            leaveCancelled (el) {
                console.log('leaveCancelled', el);
            }
        }
    }
</script>

<style lang="scss">
    .bar {
        height: 40px;
        width: 10px;
        background-color: lightcoral;
        border-radius: 4px;
    }
</style>
