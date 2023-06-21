
import { AgencyInterface } from "./agency";
import { Brand } from "./brand";
import { CarType } from "./carType";

export interface PaginationCarInterface {
    data:Array<CarInterface>,
    links:Object
}

export interface CarInterface {
    imgCar:string,
    licencePlate: string, 
    chasis: string,
    name:string, 
    color:String, 
    price:number,
    uniqueCode:string,
    kilometers:number,
    year:number,
    cylinder:string,
    transmission:string,
    direction:string,
    traction:string,
    tapestry:string,
    airConditioning:string,
    glasses:string,
    fuel:string,
    country:string,
    photo_360:string,
    creationDate?:string,
    motor?:string,
    fuelConsumption?:string
    brand?:Brand,
    carType?:CarType,
    agency?:AgencyInterface,
    additionalInfo?:CarAdditionalInfo,
    gallery?:Array<string>
}

interface CarAdditionalInfo {
    displayName:string,
    priceWow:number,
    uniqueCode:string,
    dateLimitPriceWow:string
}