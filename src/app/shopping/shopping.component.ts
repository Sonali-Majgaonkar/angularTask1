import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductServiceService } from '../sharad/product-service.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit{
  productDetail : any;
  productItem : any;
  addItem : any;
  selectedItem : any;
  currentValue : any = 1;

  constructor(private productService : ProductServiceService){

  }

  ngOnInit(): void {
    this.productService.productDataSub.subscribe((data : any)=>{
      this.productItem  = data;
      // console.log(this.productItem);

      // this.productService.addBagDataSub.subscribe((addData : any)=>{
      //   this.addItem = addData;
      //   console.log(this.addItem);

      // })
    })

  }

  decreseNum(eve:any) {
     this.currentValue = eve.currentTarget.nextSibling.value;
    this.currentValue > 1 ? this.currentValue-- : eve.currentTarget.setAttribute("disabled","disabled");
    eve.currentTarget.nextSibling.value = this.currentValue;
  }

  incrementNum(eve:any) {
    this.currentValue = eve.currentTarget.previousSibling.value;
    eve.currentTarget.previousElementSibling.previousElementSibling.removeAttribute("disabled");
   this.currentValue >= 1 ? this.currentValue++ : this.currentValue;
   eve.currentTarget.previousSibling.value = this.currentValue
 }

 addItemToBuy(i:number , eve : any){
  this.selectedItem = this.productService.getSelectedItem(i)

  let selectedItemObj = {pName : this.selectedItem.pName, qty : this.currentValue, pPrice : this.selectedItem.pPrice, orderTotal : (this.currentValue * this.selectedItem.pPrice)}
  // console.log(selectedItemObj);
  this.productService.listOfSelectedItem(selectedItemObj)
  this.currentValue = 1;
  this.productService.addBagDataSub.subscribe((addData : any)=>{
    this.addItem = addData;
  })

  }

  deleteItem(eve : any, index:any){
    this.productService.deleteData(index);
  }

}
