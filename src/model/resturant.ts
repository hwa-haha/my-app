// let data ={
//     name:"호호네 식당",
//     category:'western',
//     address:{
//       city:'incheoi',
//       detail:'somewhere',
//       zipCode:23425634
//   },
//   menu:[{name:"rose pasta", price:2000, category:"PASTA"},{name:"garlic steak", price:3000,category"western"}]
//   }

export type Restaurant ={
    name:string;
    category:string;
    address:Address;
    menu:Menu[]
}

export type Address = {
    city:string;
    detail:string;
    zipCode:Number;
}

export type Menu = {
    name:string;
    price:number;
    category:string;
}

export type AddressWithoutZip = Omit<Address,'zipcode'>
export type RestaurantOnlyCategory = Pick<Restaurant,'category'>

export type ApiResponse<T> {
    data:T[],
    totalPage:number,
    page:number
}

export type RestaurantResponse =  ApiResponse<Restaurant>
export type MenuResponse =  ApiResponse<Menu>
