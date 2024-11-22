import { InstagramArchive } from './useInstagramArchive'

export default function (archive: InstagramArchive): any {
  if (!archive) {
    return {}
  }

  return {
    startDate: archive.startDate,
    activities: archive.activities.slice(0, 5).map((a) => ({
      timestamp: a.timestamp,
      type: a.type,
    })),
    interactions: archive.interactions.slice(0, 5).map((i) => ({
      timestamp: i.timestamp,
      type: i.type,
    })),
    directMessages: archive.directMessages.slice(0, 500).map((dm) => ({
      ...dm,
    })),
  }
}
