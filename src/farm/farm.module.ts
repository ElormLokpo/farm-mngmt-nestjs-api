import {Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FarmSchema } from './farm.DTO';

@Module({
    imports:[
        MongooseModule.forFeature([{name: 'FarmModel', schema: FarmSchema}])
    ]
})
export class FarmModule{}