export interface ServiceResource {
    id:number;
    prefix: string;
    name:string;
    status: ServiceStatus;
}

export interface ServiceStatus {
    value:string;
}
