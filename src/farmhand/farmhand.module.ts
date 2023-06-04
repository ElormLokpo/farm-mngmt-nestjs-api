import {Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FarmHandController } from './farmhand.controller';
import { FarmHandSchema } from './farmhand.DTO';
import { FarmHandServices } from './farmhand.services';

@Module({
    imports:[
        MongooseModule.forFeature([{name: 'FarmHandModel', schema: FarmHandSchema}])
    ],
    controllers: [FarmHandController],
    providers: [FarmHandServices]
})
export class FarmHandModule{}