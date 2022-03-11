"use strict";
/* exports at end of file since exporting an object, which can only be referenced after definition */
/* eslint-disable */


function askPassword(ok, fail, password) {
    if(password === "rockstar"){
        return ok();
    }else {
        return fail();
    }
}
    let user = {
        name: "John",
        loginOk(){
            return `${this.name} logged in`;
        },
        loginFail(){
            return`${this.name} failed to log in`;
        },
    };

   // askPassword(user.loginOK.bind(user), user.loginFail.bind(user), password);








function askPassword2(ok, fail, password) {
    if(password === "rockstar"){
        return ok();
    }else {
        return fail();
    }

}

let user2 = {
    name: "John",
        loginOk(){
            console.log(`${this.name} logged in`);
        },
        loginFail(){
            console.log(`${this.name} failed to log in`);
        },

};






/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = {askPassword, user, askPassword2, user2 }; //add all of your function names here that you need for the node mocha tests
