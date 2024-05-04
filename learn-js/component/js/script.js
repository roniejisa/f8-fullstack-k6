customElements.define(`todo-app`, class extends HTMLElement{
    connectedCallback(){
        var _this = this;
        var html = `
            <div>
                <ul>
                    <li>Công việc 1</li>
                    <li>Công việc 2</li>
                    <li>Công việc 3</li>
                </ul>
                <input type="text" placeholder="Tên...." />
                <button>Thêm</button>
            </div>
        `;
        _this.innerHTML = html;
    }
})