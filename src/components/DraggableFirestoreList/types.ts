import { IDoc } from 'react-firestore-listener/dist/interfaces'

export interface IDraggableFirestoreList {
  docs: (IDoc & { name: string; order: number })[]
}
