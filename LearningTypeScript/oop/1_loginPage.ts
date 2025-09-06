

class LoginPage {

    clickingLoginButton(): void {

        console.log('Clicking the button...')
    }
}







class FacebookLoginPage {
    typingPassword(passwordTyping: string): void {
        console.log('typing the password...' + passwordTyping)
    }
}


class AmazonLoginPage {
    typingNameAndPassword(name: string, password: string): void {
        console.log('name ' + name)
        console.log('password ' + password)
    }
    verifateMessage(expectedmessage: string): boolean {
        if (!expectedmessage.includes('!')) {
            return true
        } else {
            return false
        }
    }


}