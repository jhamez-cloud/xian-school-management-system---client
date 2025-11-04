export type Admin = {
    user: {
        userName: string;
        email: string;
    };
    studentCount: number;
    lecturerCount: number;
}

export type studentsType = ({
    _id:any,
    name: string,
    level: number,
    GPA: number,
    image: string,
})[]