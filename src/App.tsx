import { Flex } from '@mantine/core'
import UploadInstagramArchive from './UploadInstagramArchive'
import useInstagramArchive from './useInstagramArchive'
// import stripArchive from './stripArchive'

const Displayer = ({ archive }: { archive: any }) => {
  // const parts = archive?.activities.filter((a) => a.type === 'Story')

  // const debug = {
  //   dms: archive?.directMessages.length,
  //   sentByMe: archive?.directMessages.filter((dm: any) => dm.sentByMe).length,
  //   received: archive?.directMessages.filter((dm: any) => !dm.sentByMe).length,
  //   comments: archive?.interactions.filter((o: any) => o.type == 'Comment')
  //     .length,
  // }

  // console.log(archive?.activities?.length)

  return (
    <Flex direction="column">
      <h2>Archive</h2>
      <pre key={`${archive}`}>
        {JSON.stringify(
          {
            startDate: archive?.startDate,
            activities: archive?.activities.slice(0, 2),
            interactions: archive?.interactions.slice(0, 2),
            directMessages: archive?.directMessages.slice(0, 2),
          },
          null,
          2
        )}
      </pre>
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
