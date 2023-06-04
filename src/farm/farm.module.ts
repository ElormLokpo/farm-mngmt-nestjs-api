import {Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FarmController } from './farm.controller';
import { FarmSchema } from './farm.DTO';
import { FarmServices } from './farm.services';

@Module({
    imports:[
        MongooseModule.forFeature([{name: 'FarmModel', schema: FarmSchema}])
    ],
    controllers: [FarmController],
    providers: [FarmServices]
})
export class FarmModule{}