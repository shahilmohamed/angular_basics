export class CourseService{
    private course:string[]=['Angular 12','React js','JSP','Core Java','Spring Boot'];

    getCourse()
    {
        return(this.course);
    }
}