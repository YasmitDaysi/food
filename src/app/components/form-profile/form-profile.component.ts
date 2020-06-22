import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.scss']
})
export class FormProfileComponent implements OnInit {

  value: Date;
  date14: Date;
  user: any;
  constructor(private http: HttpClient, private userService: UserService) {
  }

  profileForm = new FormGroup({
    names: new FormControl('', [Validators.required]),
    lastName: new FormControl ('', [Validators.required]),
    dni: new FormControl('', [Validators.required, Validators.minLength(8)]),
    documentType: new FormControl('1'),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    agreePromotions: new FormControl('', [Validators.required, Validators.requiredTrue]),
    agreeTermsAndConditions: new FormControl('', [Validators.required, Validators.requiredTrue])
  });

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('infoUser'));
    this.userEmail.setValue(this.user.email);
    if (localStorage.getItem('CognitoIdentityServiceProvider.62n13nhk7bqnmd7qdr8vkbfgnk.LastAuthUser').includes('Facebook')) {
      this.names.setValue(this.user.given_name);
      this.lastName.setValue(this.user.family_name);
    } else if (localStorage.getItem('CognitoIdentityServiceProvider.62n13nhk7bqnmd7qdr8vkbfgnk.LastAuthUser').includes('Google') ) {
      this.names.setValue(this.user.middle_name);
      this.lastName.setValue(this.user.family_name);
    } else {
      this.names.setValue(this.user.name);
      this.lastName.setValue(this.user['custom:family_name']);
      this.dni.setValue(this.user['custom:dni']);
    }
  }

  save(a) {
    console.log(a);
    this.userService.postUser(a).subscribe(() => {
      console.log('user creado');
    });
  }
  get names() {return this.profileForm.get('names'); }
  get lastName() {return this.profileForm.get('lastName'); }
  get dni() {return this.profileForm.get('dni'); }
  get userEmail() { return this.profileForm.get('userEmail'); }
}
