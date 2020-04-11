export interface User {
    id: string;
    firstName: string;
    lastName: string;
}

export interface Course {
    id: string;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
}