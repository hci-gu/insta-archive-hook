import { Flex } from '@mantine/core'
import UploadInstagramArchive from './UploadInstagramArchive'
import useInstagramArchive from './useInstagramArchive'
// import stripArchive from './stripArchive'

const Displayer = ({ archive }: { archive: any }) => {
  // const parts = archive?.activities.filter((a) => a.type === 'Story')

  return (
    <Flex direction="column">
      <h2>Archive</h2>
      <pre key={`${archive}`}>{JSON.stringify(archive, null, 2)}</pre>
    </Flex>
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
      <Flex>
        <Displayer archive={archive} />
        {/* <Displayer archive={stripArchive(archive)} /> */}
      </Flex>
    </div>
  )
}

export default App
