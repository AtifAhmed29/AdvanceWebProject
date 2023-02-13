import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, length, Length } from "class-validator";

export class AmbulanceDTO{

    
    @IsNotEmpty()
    @Length(4,20)
    @IsString({message:"Invalid Name"})
    driverName:string

    @IsNotEmpty({message:"hospital id can nt be empty"})
    @IsInt()
    hospitalId:number

    @IsNotEmpty()
    @IsInt()
    rent:number
    

    @IsNotEmpty()
    @IsString()
    @Length(11,11)
    phone:string


    @IsOptional()
    // @IsBoolean({})
    status:boolean

    
    @IsOptional()
    // @IsInt()
    patientId:number


    @IsNotEmpty()
    @IsString()
    location:string






}