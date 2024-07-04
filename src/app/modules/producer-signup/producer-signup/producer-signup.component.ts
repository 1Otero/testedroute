import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'
import { SessionTokenService } from './../../../service/session-token/session-token.service'
import { StoreAndProducerService } from './../../../service/store-and-producer/store-and-producer.service'
import { JsonStoreAndProducer } from './../../../model/storeandproducer/json-store-and-producer'
import { MatStepper } from '@angular/material/stepper';
import { Storeandproducer } from '../../../model/storeandproducer/storeandproducer';
import { AlertPrincipalService } from '../../../service/alert/alert-principal.service';

@Component({
  selector: 'app-producer-signup',
  templateUrl: './producer-signup.component.html',
  styleUrl: './producer-signup.component.css',
  providers: [
    {
      provide:  STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ]
})
export class ProducerSignupComponent {
  @ViewChild("stepper") private myStepper:MatStepper | undefined;
  firstformgroup:any= FormGroup;
  secondformgroup:any= FormGroup;
  storeRequired:any=FormGroup;
  tokenMe:String="";
  email:String="";
  messageDialog:String= "";
  typeDialog:String= "";
  viewLogError:Boolean=false
  //emailStore:String="";
  isDisabled:Boolean= true;
  jsonStoreAndProducer!:JsonStoreAndProducer;
  public constructor(private formBuilder:FormBuilder, private sessionTokenService:SessionTokenService,
     private storeAndProducerService:StoreAndProducerService, private alertPrincipalService:AlertPrincipalService){
  this.firstformgroup= this.formBuilder.group({
    email: ['', Validators.required],
    token: ['12345']
    });
  this.secondformgroup= this.formBuilder.group({
    //email: ['', Validators.required],
    emailProducer: new FormControl({value: '', disabled: true}),
    nameProducer: ['', Validators.required],
    lastNameProducer: ['', Validators.required],
    //descriptionProducer: ['', Validators.required]
  });
  this.storeRequired= this.formBuilder.group({
    nameStore: ['', Validators.required],
    emailStore: ['', Validators.nullValidator],
    nitStore: ['', Validators.nullValidator],
    descriptionStore: ['', Validators.nullValidator]
  })
  }
  isLinear= true;
  isViewToken:Boolean= false;
  getValidateEmail(){
    const emailMe= this.firstformgroup.get("email").value
    if(emailMe == null){
      this.isViewToken= false;
      return;
    }
    if(emailMe.includes("@")){
      //this.tokenMe= "12345";
      this.sessionTokenService.verifyEmailAndSendTokenProducer(emailMe)
      .subscribe(d => {
        const sendedToken= d.success
        if(sendedToken == true){
          this.isViewToken= true;
        //
        //
        //Aqui debo poner validacion para deshabilitar verify -> token, al usar o enviarse otro nuevo token
        //
        //
          this.alertPrincipalService.showAlert({type: 'warning', message: "Se envio token a yo-producer " + emailMe});
          return;
        }
        const memessage= new String(d.success)
        this.isViewToken= false;
        //this.alertPrincipalService.showAlert({type: 'danger', message:"Ya exite yo-producer con ese correo o el email - validar que su correo este correctamente" + emailMe})
        this.alertPrincipalService.showAlert({type: 'danger', message: memessage})
      })
    }else{
      this.isViewToken= false;
      this.tokenMe= "";
      console.log("fill out your email")
    }
  }
  getValidateToken(){
    this.sessionTokenService.getEmailAndVerifyTokenProducer(this.tokenMe)
    .subscribe((v) => {
      const objectVerify= Object.assign(v.success);
      if(objectVerify.existToken){
        const emailVerifyed= objectVerify.email
        //this.email= objectVerify.email
        //console.log(this.email)
        //this.secondformgroup.get('emailProducer').setValue(this.email)
        this.secondformgroup.get('emailProducer').setValue(emailVerifyed);
        this.myStepper?.next();
        return; 
      }
      this.alertPrincipalService.showAlert({type: 'danger', message: "Este token no es valido, debe validar su email yo-productor"});
      //this.isViewToken= false;
      return;
    })  
  }
  resetMe(){
    console.log("reseting...")
    this.isViewToken= false;
    this.myStepper?.reset()
  }
  createStoreAndProducer(){
    //const jsonValueProducer= Object.assign(this.secondformgroup.value)
    const jsonValueProducer= Object.assign(this.secondformgroup.getRawValue())
    const jsonValueStore= Object.assign(this.storeRequired.value)
    const jsonStoreAndProducerBody:Storeandproducer= Object.assign(jsonValueProducer, jsonValueStore)
    // const emailProducer= this.secondformgroup.get('emailProducer').value;
    // jsonStoreAndProducerBody.emailProducer= emailProducer;
    this.storeAndProducerService.createStoreAndProducer(jsonStoreAndProducerBody)
    .subscribe(v => {
      console.log(v)
      this.alertPrincipalService.showAlert({type: 'success', message: 'Se creo el usuario correctamente'})
      this.myStepper?.next()
      this.myStepper?.reset()
    })
  }
}
