import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';

@Controller('students')
export class studentController {
    @Get()
    getStudent() {
        return 'All students';
    }

    @Get('/:studentId') // a dynamic route
    getStudentById(@Param('studentId') studentId: string) {
        return `Get student with Id of ${studentId}`;
    }

    @Post()
    createStudent(@Body() body) {
        return `Create the student with the following data ${JSON.stringify(
            body,
        )}`;
    }

    @Put('/:studentId')
    updateStudent(@Param() studentId: string, @Body() body) {
        return `Update the student with Id of ${studentId} and with the following data ${JSON.stringify(
            body,
        )}`;
    }

    @Delete('/:studentId')
    deleteStudent() {
        return 'student deleted';
    }
}
