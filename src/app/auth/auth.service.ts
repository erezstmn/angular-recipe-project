import * as firebase from 'firebase';

export class AuthService{
    singupUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((e) => console.log(e))
    }
    signinUser(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => console.log(res))    
            .catch((e) => console.log(e))
    }
}