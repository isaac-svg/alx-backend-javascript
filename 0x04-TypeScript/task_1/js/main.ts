class Teacher {
    private readonly firstName: string;
    private readonly lastName: string;
    private readonly fullTimeEmployee: boolean;
    private readonly yearsOfExperience?: number;
    private readonly location: string;
    private readonly otherAttributes: Record<string, any>;

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number, otherAttributes: Record<string, any> = {}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.yearsOfExperience = yearsOfExperience;
        this.location = location;
        this.otherAttributes = otherAttributes;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getYearsOfExperience(): number | undefined {
        return this.yearsOfExperience;
    }

    getLocation(): string {
        return this.location;
    }

    getOtherAttributes(): Record<string, any> {
        return this.otherAttributes;
    }
}



interface Teachers {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; 
}

interface Directors extends Teachers {
    numberOfReports: number;
}


interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0);
    return `${firstLetter}. ${lastName}`;
};




