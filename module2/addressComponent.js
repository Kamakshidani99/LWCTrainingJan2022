import { LightningElement } from 'lwc';

export default class addressComponent extends LightningElement {
    currentaddress1;
    currentaddress2;
    currentlandmark;
    currentzipCode;
    address1;
    address2;
    landmark;
    zipCode; 
    sameOfPermanent = false;

    sameOfPermanentChanged(event){
        this.sameOfPermanent = (this.sameOfPermanent == true) ? false : true;
        if(this.sameOfPermanent){
            this.currentaddress1  = this.address1;
            this.currentaddress2  = this.address2;
            this.currentlandmark  = this.landmark;
            this.currentzipCode   = this.zipCode;
            
        }else{
            this.currentaddress1  = '';
            this.currentaddress2  = '';
            this.currentlandmark  = '';
            this.currentzipCode   = '';    
        }
    }
    address1Change(event){
        this.address1 = event.target.value;
    }
    address2Change(event){
        this.address2 = event.target.value;
    }
    landmarkChange(event){
        this.landmark = event.target.value;
    }
    zipCodeChange(event){
        this.zipCode = event.target.value;
    }
}