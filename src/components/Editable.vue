<template>
    <div>
        <div class="editable"
             ref="editable"
             id="editable"
             contenteditable
             v-on="listeners"
             v-html="value">
        </div>
        <br />
        <input v-model="color">
        <input v-model="fontSize">
        <input v-model="backgroundColor">
        <br />
        <button @click="changeStyle('color')">Color</button>
        <button @click="changeStyle('fontSize')">Font Size</button>
        <button @click="changeStyle('backgroundColor')">Background color</button>
        <button @click="exportJson">Export JSON</button>
    </div>
</template>

<script>
    import ElementComponent from "./ElementComponent";
    import Vue from 'vue'

    export default {
        // eslint-disable-next-line vue/no-unused-components
        components: {ElementComponent},
        comments: {
            ElementComponent
        },
        data() {
            return {
                value: 'hello world some test content',
                elements: [],
                color: 'red',
                fontSize: '18',
                backgroundColor: 'green',
                selected: ''
            };
        },
        computed: {
            listeners() {
                return {
                    ...this.$listeners,
                    input: this.onInput,
                    keydown: this.keypress
                };
            },
        },
        methods: {
            onInput(e) {
                this.$emit('input', e.target.innerText);
            },
            keypress (event) {
                if (event.key !== 'ArrowRight') return;
                this.focusOnBaseElement()
            },
            focusOnBaseElement() {
                let el = document.getElementById("editable");
                let range = document.createRange();
                range.selectNodeContents(el);
                let sel = window.getSelection();

                if (sel.focusNode.id !== 'editable' && range.commonAncestorContainer.lastElementChild) {
                    if (sel.focusOffset === range.commonAncestorContainer.lastElementChild.innerText.length) {
                        let inner = el.innerHTML.replace(/(?:^(?:&nbsp;)+)|(?:(?:&nbsp;)+$)/g, '');
                        el.innerHTML = inner + '&nbsp;';

                        sel.removeAllRanges();
                        range.selectNodeContents(el);
                        range.collapse(false);
                        sel.addRange(range);
                        el.focus();
                    }
                }
            },
            changeStyle(style) {
                this.addStyle({ [style]: this[style] })
            },
            addStyle ({ color, fontSize, backgroundColor}) {
                this.selected = '';
                const { extentOffset, anchorOffset, focusNode } = window.getSelection();
                let content = focusNode.textContent;

                if (extentOffset > anchorOffset) {
                    this.selected = content.slice(anchorOffset, extentOffset);
                } else {
                    this.selected = content.slice(extentOffset, anchorOffset);
                }

                if (!this.selected) return;

                let ComponentClass = Vue.extend(ElementComponent);
                let instance = new ComponentClass({
                    propsData: { color, fontSize: fontSize, backgroundColor, text: this.selected }
                });

                let div = document.createElement("div");
                window.getSelection().getRangeAt(0).surroundContents(div);

                instance.$mount(div);
            },
            exportJson () {
                let el = document.getElementById("editable");
                let range = document.createRange();
                range.selectNodeContents(el);
                let fragment = range.cloneContents();
                console.log(fragment.children);
            }
        }
    };
</script>
<style lang="scss" scoped>
    .editable {
        width: 500px;
        height: 200px;
        border: 1px solid lightseagreen;
        margin: 0 auto;
        outline: none;
        box-sizing: border-box;
        -webkit-user-modify: read-write;
        word-wrap: break-word;
        line-break: after-white-space;
        -webkit-line-break: after-white-space;
        overflow: hidden;
    }
    .base {
        width: 100%;
        min-width: 100%;
        height: 20px;
    }
</style>
