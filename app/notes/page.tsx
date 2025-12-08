import SidebarNotes from './filter/@sidebar/SidebarNotes';
import NotesClient from './Notes.client';

import css from './NotesPage.module.css';

export default function NotesPage() {
  return (
    // <div style={{ display: 'flex', padding: '20px' }}>
    <div className={css.container}>
      <aside style={{ width: '200px' }}>
        <SidebarNotes />
      </aside>

      <main style={{ flex: 1, maxWidth: '1080px' }}>
        <NotesClient />
      </main>
    </div>
  );
}
