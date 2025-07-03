import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CahtModule } from './caht/caht.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [CahtModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
