import { Body, Controller, Get, Post } from '@nestjs/common';
import {userDto} from '../dto/users.dto'
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
    constructor(private usersService : UsersService){}
    @Get()
    findAllUsers(){
        return this.usersService.findAllUsers();
    }

    @Post()
    insertUsers(@Body() users: userDto){
       this.usersService.insertUsers(users);
        
    }

}
