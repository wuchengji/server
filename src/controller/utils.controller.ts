import { Controller, Get, RequestIP } from '@midwayjs/decorator';

@Controller('/utils')
export class UtilsController {
  @Get('/getIp')
  async getIp(@RequestIP() ip: string) {
    return ip;
  }
}
