'use strict';

class Calc {
    constructor(obj) {
        this.wrapper = document.querySelector(obj);
        this.enter = this.wrapper.querySelector('.calculator__add');
        this.rooms = this.wrapper.querySelector('.rooms');
        this.cselect = this.wrapper.querySelector('.calculator__select');
        this.rezult = this.wrapper.querySelector('.rezult');
        this.button = this.wrapper.querySelector('.rooms__calculate');
        this.img = this.wrapper.querySelector('img');
        this.sel = this.wrapper.querySelector('select');
        this.rbut = this.rooms.querySelector('.rooms__btn')
        this.arrayPic = {100:'home.png',300:'apartment.png',500:'office.png'};
        this.body = document.body;
        // this.add = this.wrapper.querySelector('.rooms_add');
        // this.del = this.wrapper.querySelector('.rooms_del');
        this.cost = 100;
        this.array = 0;
        this.totalSqare = 0;
    }

    plus = function(e) {
        let t = e.target;
        if (t.classList.contains('rooms_add')) {
            this.render();
            this.close(t);
            return;
        } 

        if(t.classList.contains('rooms_del')){
            this.dlt(t);
            this.math();
        }
    }

    // minus = function(e) {
    //     let tt = e.target;
    //     if (tt.classList.contains('rooms_del')) {
            
    //     }
    // }

    render = function() {
        let posit = `
            <div class="rooms">
            <input type="text" class="rooms__title" placeholder="Назва приміщення">
            <input type="number" class="rooms__square" placeholder="0.00" min="0" max="1000">
            <span class="rooms__btn rooms__btn--show rooms_add">+</span>
            <span class="rooms__btn rooms__btn--hidden rooms_del">-</span>
            </div>`
            
        this.enter.insertAdjacentHTML('beforeend',posit);
    }

    addProperties = function() {
        // this.number = this.cost;
        this.array = this.wrapper.querySelectorAll('.rooms__square');
        // console.dir()
    }

    math = function() {
        this.addProperties();
        this.array.forEach(this.allTotalSqare.bind(this));
        this.r = this.cost * this.totalSqare;
        this.rezult.innerHTML = this.r;   
        this.totalSqare = 0;   
    }

    allTotalSqare = function(elem) {
        this.totalSqare = this.totalSqare + +elem.value;
        console.log(elem.value);
    }

    movepicture = function() {
        this.cost = this.sel.value;
        this.img.setAttribute('src','pic/' + this.arrayPic[this.cost]);
    }

    mathsum = function(e) {
        let target = e.target;
        if(target.classList.contains('rooms__square')){
            this.math(); 
        }
    }

    close = function(btn) {
        btn.classList.remove('rooms__btn--show');
        btn.classList.add('rooms__btn--hidden');

        btn.nextElementSibling.classList.remove('rooms__btn--hidden');
        btn.nextElementSibling.classList.add('rooms__btn--show');
        console.dir(btn);
    }

    dlt = function(btn) {
        console.dir(btn);
        btn.parentElement.remove();
    }

    init() {
        console.log(this);
        this.enter.addEventListener('click',this.plus.bind(this));
        this.button.addEventListener('click',this.math.bind(this));
        this.wrapper.addEventListener('input', this.mathsum.bind(this));
        this.wrapper.addEventListener('input',this.movepicture.bind(this));
    }
}
