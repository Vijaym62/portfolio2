import { Tag } from "./Tag";

export interface Project{
// picture: any;
    title: string;
    id: number;
    name:string;
    summary: string;
    description:string;
    projectLink:string;
    pictures: string[];
    tags: Tag[];
}