

export interface ICategory {
name:string;
description?:string;
}

export interface ICategoryResponse extends ICategory {
 _id:string
 updatedAt:string;
 createdAt:string
}