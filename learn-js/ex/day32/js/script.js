var changeDataEvent = new Event('change-data-event')
window.addEventListener('change-data-event', function (event) {
    if (JSON.stringify(event.oldData) !== JSON.stringify(event.newData)) {
        const newData = Object.entries(event.newData).filter(([key, value]) => {
            return !Object.entries(event.oldData).some(([keyOld, valueOld]) => keyOld === key && valueOld === value);
        })
        if (newData.length) {
            newData.forEach(([key, value]) => {
                event.component.els[key].forEach(item => {
                    item.data = value;
                })
            })
            changeDataEvent.oldData = Object.assign({}, event.newData);
        }
    }
})
class F8 {
    static component(component, options = {}) {
        class classElement extends HTMLElement {
            constructor() {
                super();
                if (options.data) {
                    this.data = Object.assign({}, options.data())
                    changeDataEvent.oldData = Object.assign({}, this.data);
                }
                this.els = {};
            }
            connectedCallback() {
                const root = this.attachShadow({
                    mode: 'open'
                })
                const template = document.createElement('template');
                template.innerHTML = options.template;
                const templateNode = template.content.cloneNode(true);
                var _this = this;
                const textNodes = F8.selectTextNode(templateNode);
                textNodes.forEach(textNode => {
                    const regexCatchKey = /{{([^{}])+}}/g;
                    var matches = textNode.data.match(regexCatchKey);
                    if (Array.isArray(matches)) {
                        matches.forEach((regex) => {
                            var keyData = regex.match(/{{(.+)}}/)
                            keyData.forEach((item, index) => {
                                keyData[index] = keyData[index].trim();
                            })
                            if (_this.data[keyData[1]] !== undefined) {
                                if (!Array.isArray(this.els[keyData[1]])) {
                                    _this.els[keyData[1]] = [];
                                }
                                const textContent = document.createTextNode(_this.data[keyData[1]]);
                                _this.els[keyData[1]].push(textContent);
                                const range = document.createRange();
                                const index = textNode.data.search(regex);
                                range.setStart(textNode, index);
                                range.setEnd(textNode, index + regex.length);
                                range.deleteContents();
                                range.insertNode(textContent);
                            }
                        })
                    }
                })

                Array.from(templateNode.children).forEach(item => {
                    var listAction = item.outerHTML.match(/v-on:(.+)="(?:([a-z]+)(.+)|(.+))"/)
                    if (Array.isArray(listAction)) {
                        const event = listAction[1];
                        const keyFast = listAction[2];
                        const fastData = listAction[3];
                        const cb = listAction[4];

                        item.addEventListener(event, () => {
                            if (keyFast) {
                                const test = eval(`_this.data[keyFast]${fastData}`);
                            }
                            if (typeof eval(cb) === 'function') {
                                eval(cb)();
                            }
                            changeDataEvent.newData = _this.data;
                            changeDataEvent.component = _this;
                            window.dispatchEvent(changeDataEvent);
                        })

                        Array.from(item.attributes).forEach(attribute => {
                            if (attribute.name.startsWith('v-on')) {
                                item.removeAttribute(attribute.name);
                            }
                        })
                    }
                });
                root.append(templateNode);
            }

            disconnectedCallback() {
                console.log("Custom element removed from page.");
            }

            adoptedCallback() {
                console.log("Custom element moved to new page.");
            }

            attributeChangedCallback(name, oldValue, newValue) {
                console.log(`Attribute ${name} has changed.`);
            }
        }
        customElements.define(component, classElement);
    }

    static selectTextNode(element) {
        var listTextNode = [];
        /**
         * Đầu tiên loại bỏ hết các phần
         */
        element.childNodes.forEach(el => {
            if (el.nodeName === "#text") {
                listTextNode.push(el)
            } else {
                listTextNode = F8.recursiveNodeText(listTextNode, el);
            }
        })
        return listTextNode;
    }

    static recursiveNodeText(listTextNode, el) {
        el.childNodes.forEach(el => {
            if (el.nodeName === "#text") {
                listTextNode.push(el)
            } else {
                listTextNode = F8.recursiveNodeText(listTextNode, el);
            }
        })
        return listTextNode
    }
}

F8.component('counter-component', {
    data: () => {
        return {
            count: 0,
            title: "Counter App",
            counter: 5
        }
    },
    template: `
        <h1>{{title}}</h1>
        <h2>Đã đếm:<span>{{title}}</span> - {{ count }} lần</h2>
        <h2>Đã đếm:<span>{{title}}</span> - {{ count }} lần</h2>
        <h2>Đã đếm:<span>{{title}}</span> - {{ counter }} lần</h2>
        <h2>Đã đếm:<span>{{title}}</span> - {{ count }} lần</h2>
        <h2>Đã đếm:<span>{{title}}</span> - {{ counter }} lần</h2>
        <h2>Đã đếm:<span>{{title}}</span> - {{ count }} lần</h2>
        <h2>Đã đếm:<span>{{title}}</span> - {{ count }} lần</h2>
        <h2>Đã đếm:<span>{{title}}</span> - {{ count }} lần</h2>
        <button v-on:click="count--">-</button>
        <button v-on:click="count++">+</button>
        <button v-on:click="() => {this.data.title = 'Hello F8'}">test</button>
    `
});

F8.component("header-component", {
    template: `<h1>HEADER</h1>`
})