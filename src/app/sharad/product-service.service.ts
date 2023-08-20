import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private productData : any[] = [
    { pName : 'Studiowest Goa', pImgPath : 'https://cdn.shopify.com/s/files/1/0266/6276/4597/products/100001_300834099_001_1_grande.jpg?v=1613550396', pPrice : 295 },
    { pName : 'Miniso Club Night', pImgPath : 'https://m.media-amazon.com/images/I/419zCkUtBKL.jpg', pPrice : 150 },
    { pName : 'WestSide Sweatshirt', pImgPath : 'https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300898697MUSTARD_2_1024x1024.jpg?v=1654854080', pPrice : 1300 },
    { pName : 'Proline men T-shirt', pImgPath : 'https://assets.ajio.com/medias/sys_master/root/20221014/UIee/63491e16f997ddfdbd289fea/-473Wx593H-469262270-darkblue-MODEL.jpg', pPrice : 1500 },
    { pName : 'Bella Vita Perfume Set', pImgPath : 'https://m.media-amazon.com/images/I/61W+8YKi2kL._AC_UF1000,1000_QL80_.jpg', pPrice : 551 }
  ]

  private addBagData :any [] = [];

  constructor() { }

  productDataSub = new BehaviorSubject(this.productData.slice())
  addBagDataSub = new BehaviorSubject(this.addBagData.slice())

  getSelectedItem(index:number){
    return this.productData.slice()[index]
  }

  listOfSelectedItem(obj : any){
    this.addBagData.push(obj)
    this.addBagDataSub.next(this.addBagData.slice())
  }
  
  deleteData(index : number){
    this.addBagData.splice(index,1);
    this.addBagDataSub.next(this.addBagData.slice());
  }
}
