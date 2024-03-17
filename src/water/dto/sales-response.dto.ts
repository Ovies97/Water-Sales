import { Expose } from 'class-transformer';

export class SalesResponseDto {
  @Expose()
  id: number;

  @Expose()
  username: string;

  @Expose()
  quantity: number;

  @Expose()
  Litres: number;

  @Expose()
  Price: number;

  @Expose()
  amount: number;

  // Exclude userId and password from response
  // By not including these properties with @Expose, they will be excluded from the response
}
