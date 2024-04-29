(() => {
    const settingDefault = {
        fromTo: false,
        lunar: false,
        format: "dd/mm/YYYY"
    }
    // Hiện tại chỉ làm ngày chọn thôi
    function NewDatePicker(el, settings = {}) {
        this.element = el;
        this.settings = Object.assign({}, settingDefault, settings);
        this.startDay = 1;
        this.nameDays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
        this.nameMonths = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"];
        this.checkTimeStart = () => {
            this.value = this.element.value;
            this.listFormat = this.settings.format.split("/");
            if (this.value) {
                this.element.getAttribute("date");
                this.element.value = this.value;
                // Kiểm tra định dạng hiện tại
                const [date, month, year] = this.value.split("/");
                isCorrect = true
                if (!date || !month || !year) {
                    isCorrect = false;
                    alert("Chỉ nhận dữ liệu ở định dạng ngày/tháng/năm!");
                } else if (month > 12 || date > 31 || +month === 2 && date > this.getDateOfMonth(2, year)) {
                    alert("Ngày tháng năm không chính xác!");
                    isCorrect = false;
                }
                if (!isCorrect) {
                    const dateFix = new Date();
                    const month = dateFix.getMonth() > 10 ? dateFix.getMonth() : `0${dateFix.getMonth() + 1}`;
                    const date = dateFix.getDate() > 10 ? dateFix.getDate() : `0${dateFix.getDate()}`;
                    this.element.value = `${date}/${month}/${dateFix.getFullYear()}`;
                    this.value = new Date();
                }
                this.value = new Date(`${year}/${month}/${date}`);
            } else {
                this.value = new Date();
            }
        }

        this.init = () => {
            this.checkTimeStart();
            this.type = "date";
            this.date = new Date();
            this.container = document.createElement('div');
            this.container.className = "datepicker";
            this.eventChangeTime = new Event("change-time");
            this.container.addEventListener('change-time', (e) => {
                switch (this.type) {
                    case 'date':
                        this.container.dataset.type = "date";
                        this.monthText.style.display = null;
                        this.monthText.innerText = this.nameMonths[this.monthChange];
                        this.yearText.innerText = ` ${this.yearChange}`;
                        this.initDate();
                        break;
                    case 'month':
                        this.container.dataset.type = "month";
                        this.monthText.style.display = "none"
                        this.monthText.innerText = this.nameMonths[this.monthChange];
                        this.yearText.innerText = ` ${this.yearChange}`;
                        this.renderMonth();
                        break;
                    case 'year':
                        this.container.dataset.type = "year";
                        this.monthText.style.display = "none";
                        this.yearText.innerText = ` ${this.yearChange - 10} - ${this.yearChange + 9}`;
                        this.renderYear();
                        break;
                }

            })
            this.tableDates = document.createElement("div");
            this.tableDates.className = "date-container";
            this.date = this.value.getDate();
            // Tháng bắt đầu từ 0
            this.month = this.value.getMonth();
            this.year = this.value.getFullYear();

            this.monthChange = this.month;
            this.dateChange = this.date;
            this.yearChange = this.year;
            this.addElementHeader();
        }

        this.addElementHeader = () => {
            const yearEl = document.createElement('div');
            yearEl.className = "datepicker-header"
            this.monthText = document.createElement(`span`);
            this.yearText = document.createElement(`span`);
            this.monthText.className = "month";
            this.yearText.className = "year";
            this.monthText.innerText = this.nameMonths[this.monthChange];
            this.yearText.innerText = ` ${this.yearChange}`;
            this.divMonthYear = document.createElement('div');
            this.divMonthYear.className = "month-year";
            this.divMonthYear.append(this.monthText, this.yearText);
            const btnPrev = document.createElement('button');
            const btnNext = document.createElement('button');
            btnNext.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>`;
            btnPrev.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/></svg>`

            btnPrev.onmouseup = (e) => {
                switch (this.type) {
                    case 'date':
                        this.monthChange -= 1;
                        if (this.monthChange < 0) {
                            this.monthChange = 11;
                            this.yearChange -= 1;
                        }
                        break;
                    case 'month':
                        this.yearChange -= 1;
                        break;
                    case 'year':
                        this.yearChange -= 20;
                        break;
                }

                this.container.dispatchEvent(this.eventChangeTime);
            }

            btnNext.onmouseup = (e) => {
                switch (this.type) {
                    case 'date':
                        this.monthChange += 1;
                        if (this.monthChange > 11) {
                            this.monthChange = 0;
                            this.yearChange += 1;
                        }
                        break;
                    case 'month':
                        this.yearChange += 1;
                        break;
                    case 'year':
                        this.yearChange += 20;
                        break;
                }


                this.container.dispatchEvent(this.eventChangeTime);
            }
            const divActionPrevNext = document.createElement('div');
            divActionPrevNext.className = "prev-next";
            divActionPrevNext.append(btnPrev, btnNext);
            yearEl.append(this.divMonthYear, divActionPrevNext);
            this.container.append(yearEl)
            this.addEventMonthYear();
        }

        this.element.onchange = () => {
            this.checkTimeStart();
        }

        this.element.onmousedown = (e) => {
            this.init();
            e.stopPropagation();
            document.removeEventListener('mousedown', this.closeEvent)
            const { height, top, left } = this.element.getBoundingClientRect();
            const y = top + height;
            const x = left
            this.container.style.left = x + 'px';
            this.container.style.top = y + 5 + 'px';
            this.appendEventClose();
            document.body.append(this.container);
            this.initDate();
        }

        this.appendEventClose = () => {
            document.addEventListener('mousedown', this.closeEvent)
            this.container.addEventListener('mousedown', e => {
                e.stopPropagation();
            })
            setTimeout(() => {
                this.container.dataset.show = 1;
            }, 0);
        }

        this.closeEvent = (e) => {
            if (+this.container.dataset.show === 1) {
                this.container.dataset.show = null;
                this.container.remove();
            }
        }

        this.initDate = () => {
            this.renderDates();
            this.container.append(this.tableDates);
        }

        this.renderDates = () => {
            this.datesOfMonth = this.getDateOfMonth();
            const dayOfFirstDateMonth = this.getFirstOfDateMonth();
            let tableHTML = ``;
            for (const date of this.nameDays) {
                tableHTML += `<span>${date}</span>`
            }
            let countDayOfWeek = 7;
            let count = 0;
            let pushFirst = false;
            for (let date = 1; date <= this.datesOfMonth; date++) {
                if (count === countDayOfWeek) {
                    count = 0;
                }
                if ((count == dayOfFirstDateMonth || (dayOfFirstDateMonth == -1 && count == 6)) && date === 1 && !pushFirst) {
                    date = 1;
                    pushFirst = true;
                    tableHTML += `<button class="${(date === this.date && this.month === this.monthChange && this.year === this.yearChange) ? 'active' : ''}">${date}</button>`
                } else if (pushFirst) {
                    tableHTML += `<button class="${(date === this.date && this.month === this.monthChange && this.year === this.yearChange) ? 'active' : ''}">${date}</button>`
                } else {
                    tableHTML += `<span></span>`
                    date = 0;
                }
                count++;
            }
            tableHTML += `</tbody>`;
            this.tableDates.innerHTML = tableHTML;
            this.addEventChooseDay();
        }

        this.addEventChooseDay = () => {
            const listDate = this.tableDates.querySelectorAll("button");
            for (const date of listDate) {
                date.onmousedown = (e) => {
                    const dateValue = +date.innerText < 10 ? '0' + date.innerText : date.innerText;
                    const month = this.monthChange + 1 < 10 ? '0' + (this.monthChange + 1) : this.monthChange + 1;
                    this.element.value = `${dateValue}/${month}/${this.yearChange}`;
                    this.container.remove();
                }
            }
        }

        this.getFirstOfDateMonth = () => {
            const date = new Date(`${this.yearChange}-${this.monthChange + 1}-1`);
            return date.getDay() - 1;
        }

        this.getDateOfMonth = (month = null, year = null) => {
            if (!month) {
                month = +this.monthChange + 1;
            }
            if (!year) {
                year = +this.yearChange;
            }
            switch (month) {
                case 2:
                    if (year % 4 === 0) {
                        return 29
                    }
                    return 28;
                case 4:
                case 6:
                case 9:
                case 11:
                    return 30;
                default:
                    return 31;
            }
        }
        this.checkTimeStart();

        this.addEventMonthYear = () => {
            this.divMonthYear.onmousedown = () => {
                switch (this.type) {
                    case 'date':
                        this.type = "month"
                        break;
                    case 'month':
                        this.type = "year";
                        break;
                    default:
                        this.type = "date";
                        break;
                }
                this.container.dispatchEvent(this.eventChangeTime);
            }
        }

        this.renderMonth = () => {
            let tableHTML = ``;
            for (const month of this.nameMonths) {
                tableHTML += `<button>${month}</button>`;
            }
            this.tableDates.innerHTML = tableHTML;
            this.addEventChooseMonth();
        }

        this.renderYear = () => {
            let tableHTML = ``;
            const yearFirst = this.yearChange - 10;
            const yearEnd = this.yearChange + 10;
            for (let i = yearFirst; i < yearEnd; i++) {
                tableHTML += `<button>${i}</button>`;
            }
            this.tableDates.innerHTML = tableHTML;
            this.addEventChooseYear();
        }

        this.addEventChooseMonth = () => {
            const listMonth = this.tableDates.querySelectorAll("button");
            listMonth.forEach((month, index) => {
                month.onmousedown = (e) => {
                    this.monthChange = index;
                    this.type = "date";
                    this.container.dispatchEvent(this.eventChangeTime);
                }
            })
        }

        this.addEventChooseYear = () => {
            const listMonth = this.tableDates.querySelectorAll("button");
            listMonth.forEach((month, index) => {
                month.onmousedown = (e) => {
                    this.yearChange = +month.innerText;
                    this.type = "month";
                    this.container.dispatchEvent(this.eventChangeTime);
                }
            })
        }


    }


    const listDatepicker = document.querySelectorAll('input[data-type="datepicker"]');
    for (const datepickerEl of listDatepicker) {
        new NewDatePicker(datepickerEl, datepickerEl.getAttribute('data-value'), {});
    }
})()