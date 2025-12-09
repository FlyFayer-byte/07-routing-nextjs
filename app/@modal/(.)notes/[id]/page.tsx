import NotePreviewClient from './NotePreview.client';

export default function NotePreviewModalPage({ params }: { params: { id: string } }) {
  return <NotePreviewClient id={params.id} />;
}
