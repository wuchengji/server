import { IMiddleware } from '@midwayjs/core';
import { Middleware } from '@midwayjs/decorator';
import { NextFunction, Context } from '@midwayjs/koa';

@Middleware()
export class TestMiddleware implements IMiddleware<Context, NextFunction>{
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      console.log('调用前：');
      const result = await next();
      console.log(result);
      console.log('调用后：');
      return {
        code: 200,
        data: result
      };
    };
  }
  static getName(): string {
    return 'report';
  }
}