import { MapStatusHttpCode } from '../enums/HttpCode.js';

export type ReturnData<T> = { message: string } | T | T[] | null | object;

export interface IReturnService<T> {
  status: MapStatusHttpCode;
  data: ReturnData<T>;
}