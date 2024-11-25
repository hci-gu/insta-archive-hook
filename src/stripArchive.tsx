import { InstagramArchive } from './useInstagramArchive'

export default function (archive: InstagramArchive): any {
  if (!archive) {
    return {}
  }

  return {
    startDate: archive.startDate,
    activities: archive.activities.map((a) => ({
      timestamp: a.timestamp,
      type: a.type,
    })),
    interactions: archive.interactions.map((i) => ({
      timestamp: i.timestamp,
      type: i.type,
    })),
    directMessages: archive.directMessages.map((dm) => ({
      ...dm,
    })),
  }
}
