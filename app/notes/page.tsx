import SidebarNotes from './filter/@sidebar/SidebarNotes';
import NotesClient from './Notes.client';

import css from './NotesPage.module.css';

interface NotesPageProps {
  modal: React.ReactNode;
}

export default function NotesPage({ modal }: NotesPageProps) {
  return (
    // <div style={{ display: 'flex', padding: '20px' }}>
    <div className={css.container}>
      <aside style={{ width: '200px' }}>
        <SidebarNotes />
      </aside>
      <main style={{ flex: 1, maxWidth: '1080px' }}>
        <NotesClient /> {modal}
      </main>
    </div>
  );
}
