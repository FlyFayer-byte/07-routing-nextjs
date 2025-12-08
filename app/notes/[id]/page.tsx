// сторінка деталей однієї нотатки (динамічний маршрут).
// На цій сторінці відображається повна інформація про одну нотатку за її id.
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import NoteDetails from './NoteDetails.client';

export default async function NoteDetailsPage({
  params,
}: {
    params: { id: string };
}) {
  const {id} = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetails id={params.id} />
    </HydrationBoundary>
  );
}
