import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Pedro',
    description: 'First name of the user.',
  })  
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    example: 'Alay',
    description: 'Last name of the user.',
  })
  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @ApiProperty({
    example: 'pedrocrackc@gmail.com',
    description: 'Unique email address of the user.',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: '+593987654321',
    description: 'Valid Ecuadorian phone number.',
  })
  @IsPhoneNumber('EC', { message: 'Phone must be a valid Ecuadorian number' })
  phone!: string;

  @ApiProperty({
    example: 'Quito, Ecuador',
    description: 'Residential address of the user.',
  })
  @IsString()
  @IsNotEmpty()
  address!: string;
}
