import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { ServiceType } from '../entities/enums/service.enum';

export class CreateMaintenanceServiceDto {
    @IsString()
      @IsNotEmpty()
      serviceName: string;
    
      @IsString()
      @IsNotEmpty()
      description: string;
    
      @IsNumber()
      @Min(0)
      basePrice: number;
    
      @IsOptional()
      @IsNumber()
      @Min(0)
      estimatedTimeMinutes?: number;
    
      @IsOptional()
      @IsBoolean()
      requiresParts?: boolean;
    
      @IsEnum(ServiceType)
      type: ServiceType;
    
      @IsOptional()
      imageUrls?: string[];
    
      @IsOptional()
      @IsBoolean()
      active?: boolean;
    
      @IsOptional()
      @IsString()
      notes?: string;
}
