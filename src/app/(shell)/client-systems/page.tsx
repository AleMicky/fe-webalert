'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

import { ClientSystemFormDialog } from '@/features/client-systems/components/client-system/client-system-form-dialog';
import { ClientSystemsTable } from '@/features/client-systems/components/client-system/client-system-table';
import { useClientSystemsMutations } from '@/features/client-systems/hooks/client-system/use-client-system-mutations';
import { useClientSystemsQuery } from '@/features/client-systems/hooks/client-system/use-client-system-query';
import { CreateClientSystemDto } from '@/features/client-systems/schemas/client-system.schema';
import { ClientSystem } from '@/features/client-systems/types/client-system.types';
import { LoadingTable, PageHeader } from '@/shared/components';

export default function ClientSystemsPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ClientSystem | null>(null);

  const { data: clientSystems, isLoading } = useClientSystemsQuery();

  const {
    create,
    update,
    remove,
    isCreating,
    isUpdating,
  } = useClientSystemsMutations();

  const isSubmitting = isCreating || isUpdating;

  const handleCreate = () => {
    setSelected(null);
    setOpen(true);
  };

  const handleSubmit = (values: CreateClientSystemDto) => {
    if (selected) {
      update(
        {
          id: selected.id,
          data: values,
        },
        {
          onSuccess: () => {
            setOpen(false);
            setSelected(null);
          },
        },
      );

      return;
    }

    create(values, {
      onSuccess: () => {
        setOpen(false);
        setSelected(null);
      },
    });
  };

  return (
    <main className="p-6 space-y-4">
      <PageHeader
        title="Sistemas cliente"
        description="Sistemas conectados que emiten eventos."
        action={
          <Button onClick={handleCreate}>
            Nuevo
          </Button>
        }
      />

      {isLoading ? (
        <LoadingTable />
      ) : (
        <ClientSystemsTable
          data={clientSystems}
          onManage={(item) => router.push(`/client-systems/${item.id}`)}
          onEdit={(item) => {
            setSelected(item);
            setOpen(true);
          }}
          onDelete={(id) => remove(id)}
        />
      )}

      <ClientSystemFormDialog
        open={open}
        onOpenChange={setOpen}
        initialData={selected}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit}
      />
    </main>
  );
}
