export interface ServiceResource {
    id:number;
    prefix: string;
    name:string;
    status: ServiceStatus;
}

export interface ServiceStatus {
    value:string;
}

export interface RoleResource{
    id:number;
    name:string;
    sdlc:string;
    description:string;
}
export interface Role {
    role: RoleResource;
    isChecked:boolean;
}
