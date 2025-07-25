import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Listing } from './entities/listing.entity';
import { Comment } from './entities/comment.entity';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  imports: [TypeOrmModule.forFeature([Item, Listing, Comment])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule { }
