'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import css from './NoteDetails.module.css';
import { fetchNoteById } from '@/lib/api';

export default function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError || !note) return <p>Something went wrong.</p>;

  // 🔥 Формуємо дату один раз — React не буде перерендерювати HTML по-різному
  const formattedDate = new Date(note.createdAt).toLocaleString('uk-UA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.content}>{note.content}</p>

        {/* 💡 тепер дата стабільна і Hydration Error зникне */}
        <p className={css.date}>{formattedDate}</p>
      </div>
    </div>
  );
}
