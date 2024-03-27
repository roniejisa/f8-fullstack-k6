var btnShow = document.querySelector('.show-modal');
var modal = document.querySelector('.modal');
var modalClose = modal.querySelector('.modal-close');
var overlay = document.querySelector('.overlay');
var tabButtonList = document.querySelectorAll('.tab .btn-tab');
var tabContentList = document.querySelectorAll('.tab-content .tab');
var formList = document.querySelectorAll('form');

btnShow.addEventListener('click', showModal)
modalClose.addEventListener('click', showModal)
overlay.addEventListener('click', showModal)

function showModal() {
    modal.classList.toggle('show');
    overlay.classList.toggle('show');
    renderData();
}

tabButtonList.forEach(function (btn) {
    btn.addEventListener('click', function () {
        var id = btn.dataset.target;
        tabButtonList.forEach(function (btnRemove) {
            if (btnRemove == btn) {
                btnRemove.classList.add('active');
            } else {
                btnRemove.classList.remove('active');
            }
        })
        tabContentList.forEach(function (tab) {
            if (tab.id === id) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
            renderData(true);
        })
    })
})


function renderData(isTab = false) {
    var formDataEl = {};
    formList.forEach(function (form, index) {
        formDataEl[index] = form;
        var listInput = form.querySelectorAll('input');
        var passwordHint = form.querySelectorAll('.password-hint');
        passwordHint.forEach(function(buttonEl){
            buttonEl.addEventListener('click', function(){
                var inputEl = this.previousElementSibling;
                if(inputEl.type === 'password'){
                    inputEl.type = 'text';
                    buttonEl.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
                }else{
                    inputEl.type = 'password';
                    buttonEl.innerHTML = '<i class="fa-regular fa-eye"></i>';
                }
            })
        })

        formDataEl[index].addEventListener('submit', function (e) {
            e.preventDefault();
            var checkData = checkInputHasValue(listInput);
            if (!checkData) {
                return false;
            }

            if (checkData && !formDataEl[index].querySelector('.form-alert')) {
                var alertDiv = document.createElement('div');
                alertDiv.classList.add('form-alert');
                alertDiv.innerText = "OK!";
                this.prepend(alertDiv);
            }

        })

        listInput.forEach(function (inputEl) {
            inputEl.addEventListener('input', function () {
                if (formDataEl[index].querySelector('.form-alert')) {
                    formDataEl[index].querySelector('.form-alert').remove();
                }
                let labelParent = this.parentElement;
                if (labelParent.querySelector('.input-error')) {
                    labelParent.querySelector('.input-error').remove();
                }
            })

            inputEl.addEventListener('blur', function () {
                addInputError(this);
            })
        })

        if (isTab) {
            checkInputHasValue(listInput, true)
            if (formDataEl[index].querySelector('.form-alert')) {
                formDataEl[index].querySelector('.form-alert').remove();
            }
        }
    })
}

function checkInputHasValue(listInput, isTab = false) {
    let flag = true;
    listInput.forEach(function (input) {
        var labelEl = addInputError(input, isTab);
        if (labelEl.querySelector('.input-error')) {
            flag = false;
        }

        if (isTab && labelEl.querySelector('.input-error')) {
            labelEl.querySelector('.input-error').remove();
        }
    })
    return flag;
}

function addInputError(input, isTab = false) {
    var labelEl = input.parentElement;
    if (!isTab && input.value.trim() === '' && !labelEl.querySelector('.input-error')) {
        const divError = document.createElement('div');
        divError.innerText = 'Vui lòng nhập dữ liệu';
        divError.classList.add('input-error')
        input.parentElement.append(divError);
    } else if (input.value.trim() !== '' && labelEl.querySelector('.input-error')) {
        labelEl.querySelector('.input-error').remove();
    }
    return labelEl;
}