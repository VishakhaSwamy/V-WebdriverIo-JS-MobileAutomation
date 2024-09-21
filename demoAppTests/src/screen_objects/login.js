class login {
  
   get usernameField() { return $('~Username input field'); }
    get passwordField() { return $('~Password input field'); }
    get LoginButton() { return $('~Login button'); }

    //getText validation
    get errorMessage() {return $("//android.view.ViewGroup[contains(@content-desc, '-error-message')]/android.widget.TextView")};
    get productPage() { return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')}; 

    
    async loginAction(username, password) {
      await this.usernameField.setValue(username);
      await this.passwordField.setValue(password);
      await this.LoginButton.click();
    }
}
  module.exports = new login();
  
