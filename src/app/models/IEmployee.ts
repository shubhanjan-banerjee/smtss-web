export interface IEmployee {
    associateId: number;
    associateName: string;
    projectRole: string;
    skillRequirement: string;
    proficiency: IProfieciency[];
}

export interface IProfieciency {
    technology: string;
    proficiencyLevel: string;
}