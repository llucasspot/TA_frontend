import { Module } from '#/utils/di';
import { ApiMockModule } from '#/utils/mock';

@Module({
  imports: [ApiMockModule],
})
export class ApiModule {}
