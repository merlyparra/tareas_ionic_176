import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario = {
   email: 'myps48@gmail.com',
   password: 'prueba2'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

login(){
 if(this.usuario.email && this.usuario.password){
  this.auth.login(this.usuario).subscribe(
    (dato: any )=> {
      console.log(dato.jwt);
      localStorage.setItem('jwt', dato.jwt)
      this.navCtrl.setRoot(HomePage)     
    }

  )

 }

}  
}
