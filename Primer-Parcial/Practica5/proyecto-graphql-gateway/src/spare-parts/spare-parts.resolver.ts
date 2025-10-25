import { Resolver, Query, Args, ID, Int } from '@nestjs/graphql';
import { SparePartsService } from './spare-parts.service';
import { SparePartType } from './types/spare-part.type';

@Resolver(() => SparePartType)
export class SparePartsResolver {
  constructor(private readonly sparePartsService: SparePartsService) {}

  @Query(() => [SparePartType], { name: 'spareParts' })
  findAll() {
    return this.sparePartsService.findAll();
  }

  @Query(() => SparePartType, { name: 'sparePart' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.sparePartsService.findOne(id);
  }

  @Query(() => [SparePartType], { name: 'partsRestockRecommendation' })
  async partsRestockRecommendation(
    @Args('threshold', { type: () => Int }) threshold: number,
  ): Promise<SparePartType[]> {
    return this.sparePartsService.partsRestockRecommendation(threshold);
  }
}
