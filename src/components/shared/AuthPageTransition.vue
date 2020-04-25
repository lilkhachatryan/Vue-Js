<template>
    <transition @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @enter-cancelled="enterCancelled"
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                @leave-cancelled="leaveCancelled"
                :css="false"
                appear>
        <div class="authPageTransitionWrapper slide-up-fade-in">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'AuthPageTransition',
        methods: {
            beforeEnter (el) {
                console.log('beforeEnter', el);
            },
            enter (el, done) {
                console.log('enter', el);
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
            },
            leave (el, done) {
                console.log('leave', el);
                done();
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
    .authPageTransitionWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: calc(100vh - 13vh);
    }

    .slide-up-fade-in {
        animation: slide-up-fade-in ease 1s;
        animation-iteration-count: 1;
        transform-origin: 50% 50%;
        animation-fill-mode: forwards;
    }

    @keyframes slide-up-fade-in {
        0% {
            opacity: 0;
            transform: translateX(40px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
</style>
