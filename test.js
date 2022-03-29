'use strict'

class Calculator {
    constructor(wrap){
        this.wrap = document.querySelector(wrap);
        this.select = this.wrap.querySelector('select');
        this.pic = this.wrap.querySelector('img');
        // this.opt = this.wrap.querySelector('option');
        this.arrPic = {100:'home.png', 300:'apartment.png', 500:'office.png'};
        this.cost = 100;
    }

    selectPic() {
        this.cost = this.select.value;
        this.pic.setAttribute('src', 'pic/'+this.arrPic[this.cost])
    }

    init(){
        console.dir(this);
        this.select.addEventListener('input', this.selectPic.bind(this))
    }
}

let c = new Calculator('.calculator');
c.init();