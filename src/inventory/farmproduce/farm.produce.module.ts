import {Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FarmProduceController } from './farmproduce.controller';
import { FarmProduceSchema } from './farmproduce.DTO';
import { FarmProduceServices } from './farmproduce.services';


@Module({
    imports:[
        MongooseModule.forFeature([{name: 'FarmProduceModel', schema: FarmProduceSchema}])
    ],
    controllers: [FarmProduceController],
    providers: [FarmProduceServices]
})
export class FarmProduceModule{}