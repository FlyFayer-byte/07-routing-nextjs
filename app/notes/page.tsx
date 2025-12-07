import SidebarNotes from './filter/@sidebar/SidebarNotes';
import NotesClient from './Notes.client';

export default function NotesPage() {
  return (
    <>
      
        <div style={{ display: 'flex', padding: '20px' }}>
          <aside style={{ width: '200px' }}>
            <SidebarNotes />
          </aside>

          <main style={{ flex: 1 }}><NotesClient /></main>
        </div>
      
      {/* <SidebarNotes/> */}
      {/* <NotesClient /> */}
    </>
  );
}
