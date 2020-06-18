import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {UserService} from 'src/app/services/user/user.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.scss']
})
export class FormAddressComponent implements OnInit {

  streetArray: string[] = ['Av.', 'Jr.', 'Psje.', 'Calle.', 'Otro' ]

  constructor( private userService: UserService, private router: Router) { }
  userAddres = new FormGroup({
    userDNI: new FormControl ('', [Validators.required]),
    streetTypeCode: new FormControl ('', [Validators.required]),
    streetName: new FormControl ('', [Validators.required]),
    streetNumber: new FormControl ('', [Validators.required]),
    buildingType: new FormControl(''),
    buildingNumber: new FormControl (''),
    blockCode: new FormControl (''),
    lotNumber: new FormControl (''),
    urbanizationTypeCode: new FormControl (''),
    urbanizationName: new FormControl ('', [Validators.required]),
    zoneName: new FormControl (''),
    addresspred: new FormControl (''),
    active: new FormControl (''),
    mainAddress: new FormControl (''),
    geolocationCode: new FormControl('')
  });

  ngOnInit(): void {

  }

  save(address) {
    this.userService.postAddress(address).subscribe(() => {
      console.log('Direccion del usuario creado');
    });

  }
  get streetName() {return this.userAddres.get('streetName'); }
  get streetTypeCode() {return this.userAddres.get('streetTypeCode'); }
  get streetNumber() {return this.userAddres.get('streetNumber'); }
  get urbanizationName() {return this.userAddres.get('urbanizationName'); }
  get userDNI() {return this.userAddres.get('userDNI'); }

}
