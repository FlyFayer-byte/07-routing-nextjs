import SidebarNotes from './filter/@sidebar/SidebarNotes';
import NotesClient from './Notes.client';
import css from './NotesPage.module.css';

export default function NotesPage({
  modal,
}: {
  modal: React.ReactNode;
}) {
  return (
    <div className={css.container}>
      <aside style={{ width: '200px' }}>
        <SidebarNotes />
      </aside>

      <main style={{ flex: 1, maxWidth: '1080px' }}>
        <NotesClient />
        {modal}
      </main>
    </div>
  );
}
