import { Module } from '@nestjs/common';
import { WildcardController } from './wildcard.controller';
import { WildcardService } from './wildcard.service';
import { LinksModule } from '../links/links.module';

@Module({
  imports: [LinksModule],
  controllers: [WildcardController],
  providers: [WildcardService]
})
export class WildcardModule {}
