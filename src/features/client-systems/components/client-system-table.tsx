'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable } from '@/shared/components/data-table';

import { ClientSystem } from '../client-system.types';
import { createClientSystemColumns } from './client-system-columns';

interface Props {
  data: ClientSystem[];
  onEdit: (item: ClientSystem) => void;
  onDelete: (id: string) => void;
}

export function ClientSystemsTable({ data, onEdit, onDelete }: Props) {
  const columns = createClientSystemColumns({
    onEdit,
    onDelete,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sistemas cliente</CardTitle>
      </CardHeader>

      <CardContent>
        <DataTable
          columns={columns}
          data={data}
          searchColumn="name"
          searchPlaceholder="Buscar por nombre..."
        />
      </CardContent>
    </Card>
  );
}
