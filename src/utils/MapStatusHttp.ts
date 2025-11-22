import { MapStatusHttpCode } from "../enums/HttpCode.js";
import type { IReturnService, ReturnData } from "../interfaces/IServiceHTTPResponse.js";

export default class MapStatusHttp {
    public static okData<T>(data: ReturnData<T>): IReturnService<T> {
        return {
            status: MapStatusHttpCode.OK,
            data
        }
    }

    public static createdData<T>(data: ReturnData<T>): IReturnService<T> {
        return {
            status: MapStatusHttpCode.CREATED,
            data
        }
    }

    public static noContent<T>(): IReturnService<T> {
        return {
            status: MapStatusHttpCode.NO_CONTENT,
            data: null
        }
    }

    public static badRequest<T>(message: string): IReturnService<T> {
        return {
            status: MapStatusHttpCode.BAD_REQUEST,
            data: { message }
        }
    }

    public static unauthorized<T>(message: string): IReturnService<T> {
        return {
            status: MapStatusHttpCode.UNAUTHORIZED,
            data: { message }
        }
    }

    public static notFound<T>(message: string): IReturnService<T> {
        return {
            status: MapStatusHttpCode.NOT_FOUND,
            data: { message }
        }
    }

    public static internalServerError<T>(message: string): IReturnService<T> {
        return {
            status: MapStatusHttpCode.INTERNAL_SERVER_ERROR,
            data: { message }
        }
    }
};