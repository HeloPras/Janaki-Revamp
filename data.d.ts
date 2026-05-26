
interface BoardMember  {
    id: number,
    name:string,
    position:string,
    role?:string,
    education: string[],
    certifications: string[],
    experience?:string,
    achievements: string[],
    expertise?:string,
    image: string,
    color?:string,
}

interface TeamMember {
    
    id: number,
    name:string,
    position:string,
    department:string,
    expertise:string,
    icon: React.ElementType,
    color:string,
    skills: string[],
    type:string,
    image?:string

}