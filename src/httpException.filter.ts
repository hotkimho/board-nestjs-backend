import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    console.log('statue', status);
    const error = exception.getResponse() as
      | string
      | {
          error: string;
          statusCode: HttpStatus.BAD_REQUEST;
          message: string[];
        };
    console.log('error', error);
    if (typeof error !== 'string' && error.error === 'Bad Request') {
      return response.status(status).json({
        success: false,
        code: status,
        data: error.message,
      });
    }
    return response.status(status).json({
      success: false,
      code: status,
      data: error,
    });
  }
}
