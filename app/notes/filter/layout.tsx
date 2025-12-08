import css from '../NotesPage.module.css'

export default function FilterLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    // <div style={{ display: 'flex', padding: '20px'}}>
    <div className={css.container}>
      <aside style={{ width: '200px' }}>{sidebar}</aside>

      <main style={{ flex: 1, maxWidth: '1080px' }}>{children}</main>
    </div>
  );
}