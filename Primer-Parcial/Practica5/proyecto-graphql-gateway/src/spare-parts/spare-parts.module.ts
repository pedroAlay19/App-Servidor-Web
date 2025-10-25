import { Module } from '@nestjs/common';
import { SparePartsService } from './spare-parts.service';
import { SparePartsResolver } from './spare-parts.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:3000',
    }),
  ],
  providers: [SparePartsResolver, SparePartsService],
  exports: [SparePartsService],
})
export class SparePartsModule {}
