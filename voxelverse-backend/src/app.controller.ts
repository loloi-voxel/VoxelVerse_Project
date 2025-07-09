import { Controller, Get } from '@nestjs/common';
import { PixelAssetService } from './pixel-asset.service';

@Controller()
export class AppController {
  constructor(private pixelAssetService: PixelAssetService) {}

  @Get()
  getHello(): string {
    return 'Welcome to VoxelVerse Backend!';
  }

  @Get('total-supply')
  async getTotalSupply(): Promise<string> {
    const supply = await this.pixelAssetService.getTotalSupply();
    return `Total supply: ${supply}`;
  }
}