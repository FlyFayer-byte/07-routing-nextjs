import Modal from '@/components/Modal/Modal';
import NotePreview from './NotePreview.client';
import { fetchNoteById } from '@/lib/api';

export default async function NotePreviewModal({ params }: { params: { id: string } }) {
  const note = await fetchNoteById(params.id);

  return (
    <Modal onClose={() => history.back()}>
      <NotePreview note={note} />
    </Modal>
  );
}
