import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PixelAssetService } from './pixel-asset.service';

@Module({
  controllers: [AppController],
  providers: [PixelAssetService],
})
export class AppModule {}