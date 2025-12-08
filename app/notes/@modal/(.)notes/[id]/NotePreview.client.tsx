'use client';

import { type Note } from '@/types/note';
import css from './NotePreview.module.css';

export default function NotePreviewClient({ note }: { note: Note }) {
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          <span className={css.tag}>{note.tag}</span>
        </div>

        <p className={css.content}>{note.content}</p>

        {note.createdAt && (
          <p className={css.date}>
            {new Date(note.createdAt).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </p>
        )}

        {/* Кнопка "Назад" закриває модалку */}
        <button className={css.backBtn} onClick={() => history.back()}>
          ← Back
        </button>
      </div>
    </div>
  );
}
