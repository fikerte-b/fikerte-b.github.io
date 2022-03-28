/* eslint-disable require-jsdoc */
"use strict";
// the inner function is: this.start and this.stop
// the local variable : timer
class Clock {
    constructor({ template }){
        this.template = template;
    }
  
    //let timer;
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop(){
     // clearInterval(this.timer);
     setTimeout(()=> {clearInterval(this.timer);}, 4000);
    }
  
    start(){
      // let now = new Date().getTime();
      // this.render();
      // this.timer = setInterval(function() {
      //   if(new Date().getTime() - now > 5000){
      //     clearInterval(this.timer);
      //     return;
      //   }
      // }, this.render(), 1000);
      this.timer = setInterval(() =>this.render(), 1000);
      //setTimeout(function(){clearInterval(this.timer);}, 4000);
    }
  
  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
  clock.stop();