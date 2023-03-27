import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forbiddenName } from '../forbidden-name';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 // name=new FormControl();
 /*profile = new FormGroup({
  name: new FormControl('sonali',{
    validators:[Validators.required,Validators.minLength(6)],
    nonNullable:true
  }),
  email : new FormControl(null,{
    validators:[Validators.required,Validators.email]}),
  mobile : new FormControl(null,{nonNullable:true}),
  address : new FormGroup({
    street:new FormControl(),
    city:new FormControl(),
    state : new FormControl(),
    zip : new FormControl(),
  })
 })*/
 profile = this.fb.group({
  name: ['sonali',{
    validators:[Validators.required,Validators.minLength(6),
    forbiddenName(new RegExp(/xyz/))],
    nonNullable:true
  }],
  email : [null,
    {
    validators:[Validators.required,Validators.email],
      nonNullable:true}],
  mobiles : this.fb.array([
    this.fb.control(''),
    this.fb.control(''),
  ]),
  address : this.fb.group({
    street:[],
    city:[],
    state : [],
    zip : [],
  })
 })
 submitForm():void{
  console.log(this.profile.value);
 }

  constructor(private route : ActivatedRoute,
    private fb:FormBuilder){}
  ngOnInit(): void {

    this.route.queryParamMap.subscribe(params =>
      console.log(params));
  }
 /* updateName():void{
    this.name.setValue('sonali');
  }*/
 /* updateForm():void{
    this.profile.setValue({
      name:'sonali',
      email:null,
      mobile:null
    })
  }*/
  /*updateForm():void{
    this.profile.patchValue({
      name:''
    })*/
    updateForm():void{
      this.profile.reset();
    }
    get namectr():FormControl{
      return this.profile.get('name') as FormControl;
    }
    get mobiles():FormArray{
      return this.profile.get('mobiles') as FormArray;
    }
    addMobile():void{
      this.mobiles.push(this.fb.control(''))
    }
  }





