import { Response } from 'express';

export enum StatusCodes {
  OK = 200,
  CREATED = 201,
  NOT_FOUND = 404,
  UNAUTHORIZED = 401,
  FORBIDDEN = 405,
  INTERNAL_SERVER_ERROR = 500
}

export class HtttpResponse {
  ok(res: Response, data?: any): Response {
    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      statusMsg: 'Suceess',
      data: data
    });
  }

  notFound(res: Response, data?: any) {
    return res.status(StatusCodes.NOT_FOUND).json({
      status: StatusCodes.NOT_FOUND,
      statusMsg: 'Not Found',
      error: data
    });
  }

  unauthorized(res: Response, data?: any): Response {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      status: StatusCodes.UNAUTHORIZED,
      statusMsg: 'Unauthorized',
      error: data
    });
  }

  forbidden(res: Response, data?: any): Response {
    return res.status(StatusCodes.FORBIDDEN).json({
      status: StatusCodes.FORBIDDEN,
      statusMsg: 'Forbidden',
      error: data
    });
  }

  serverError(res: Response, data?: any): Response {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMsg: 'Internal Server Error',
      error: data
    });
  }
}
