import UploadInstagramArchive from './UploadInstagramArchive'
import useInstagramArchive, { InstagramArchive } from './useInstagramArchive'

const Displayer = ({ archive }: { archive: InstagramArchive | undefined }) => {
  // const parts = archive?.activities.filter((a) => a.type === 'Story')

  return (
    <>
      <h2>Archive</h2>
      <pre key={`${archive}`}>{JSON.stringify(archive, null, 2)}</pre>
    </>
  )
}

function App() {
  const [archive, setFile] = useInstagramArchive()

  return (
    <div
      style={{
        margin: 'auto',
        width: '70%',
      }}
    >
      <UploadInstagramArchive setFile={setFile} />
      <Displayer archive={archive} />
    </div>
  )
}

export default App
