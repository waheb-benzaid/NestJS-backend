import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';

@Controller('teachers')
export class teacherController {
    @Get()
    getTeachers() {
        return 'All teachers';
    }

    @Get('/:teacherId')
    getTeacherById(@Param() teacherId: string) {
        return `Get the teacher with Id of ${teacherId}`;
    }

    @Get('/:teacherId/students')
    getTeacherByStudents(@Param() teacherId: string) {
        return `Get the students teacher with Id of ${teacherId}`;
    }

    @Put('/:teacherId/students/:studentId')
    updateStudentTeacher(
        @Param() teacherId: string,
        @Param() studentId: string,
        @Body() body,
    ) {
        return `Update the teacher whith the Id ${teacherId} of the student with the Id of ${studentId} and with the following data ${JSON.stringify(
            body,
        )}`;
    }

    @Post()
    createTeacher(@Body() body) {
        return `Create the teacher with the following data ${body}`;
    }

    @Put('/:teacherId')
    updateTeacher(@Body() body, @Param('teacherId') teacherId: string) {
        return `Update the teacher with following Id ${teacherId} and with the following data ${JSON.stringify(
            body,
        )}`;
    }

    @Delete('/:teacherId')
    deleteTeacher() {
        return 'teacher deleted';
    }
}
