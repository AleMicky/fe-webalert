import { baseService } from '@/shared/core/base.service';

import { ClientSystem } from './client-system.types';
import {
    CreateClientSystemDto,
    UpdateClientSystemDto,
} from './client-system.schema';

const endpoint = '/client-systems';

export const clientSystemService = baseService<
    ClientSystem,
    CreateClientSystemDto,
    UpdateClientSystemDto
>(endpoint);