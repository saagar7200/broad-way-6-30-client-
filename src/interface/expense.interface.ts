/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IImage {
    public_id:string;
    path:string;

}

export interface  IExpense {
    title:string;
    amount:number;
    category:{
        label:string;
        value:string;
    } | string,
    receipts?:File[] | IImage[],
    description?:string;
    date:string;
}