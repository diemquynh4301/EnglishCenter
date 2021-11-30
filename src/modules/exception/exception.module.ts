import { Module } from '@nestjs/common';

import { Exception } from './exception.controller';

@Module({
    providers: [],
    controllers: [Exception]
})
export class ExceptionModule{}