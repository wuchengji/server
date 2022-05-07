import { Controller, Get, RequestIP } from '@midwayjs/decorator';

@Controller('/home')
export class HomeController {
  @Get('/getIp')
  async getIp(@RequestIP() ip: any) {
    console.log(ip);
    return ip;
  }
}
