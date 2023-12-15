class loginpage{

elements={
    usernameInput:() => cy.get('input[data-qa="login-email"]'),
    passwordInput: ()=> cy.get('input[name="password"]'),
    loginbtn: ()=> cy.get('button[data-qa="login-button"]'),
    signloginbtn:() => cy.get('a[href="/login"]'),
    errorMsg: () => cy.get('p[style="color: red;"]'),
    logoutbtn: () => cy.get('a[href="/logout"]')
}



typeUsername(username){
this.elements.usernameInput().type(username);     
}

typePassword(password){
    this.elements.passwordInput().type(password);
}

clickBTNLogin(){
    this.elements.loginbtn().click();
}

clickBTNLogout(){
    this.elements.logoutbtn().click();
}
}
module.exports = new loginpage();