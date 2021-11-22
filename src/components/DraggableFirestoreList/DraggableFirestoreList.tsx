import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  ResponderProvided,
} from 'react-beautiful-dnd'
import { IDraggableFirestoreList } from './types'
import { FaBars } from 'react-icons/fa'
import firebase from 'firebase'
import Span from '../Span'
import { useClassNames, useTailwindTheme } from '@hooks'
import React, { useState } from 'react'
import { IDoc } from 'react-firestore-listener/dist/interfaces'

const reorder = (list: IDoc[], startIndex: number, endIndex: number) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

const DraggableFirestoreList = ({ docs }: IDraggableFirestoreList) => {
  const [loading, setLoading] = useState(false)
  const handleDragEnd = async (
    result: DropResult,
    provided: ResponderProvided,
  ) => {
    if (!result.destination) return
    setLoading(true)
    const items: IDoc[] = reorder(
      docs,
      result.source.index,
      result.destination.index,
    )
    const batch = firebase.firestore().batch()
    docs.forEach((doc) => {
      items.forEach((item, idx) => {
        if (item.docId === doc.docId) {
          batch.update(doc.ref, { order: idx })
        }
      })
    })
    await batch.commit()
    setLoading(false)
  }
  const theme = useTailwindTheme()
  const classNames = useClassNames()

  const getItemStyle = (draggableStyle) => ({
    userSelect: 'none',
    ...draggableStyle,
  })

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="DraggableFirestoreList">
        {(provided, snapshot) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {docs.map((doc, idx) => (
              <Draggable key={doc.docId} index={idx} draggableId={doc.docId}>
                {(provided, snapshot) => (
                  <li
                    className={classNames(
                      `flex justify-between items-center mb-2 p-4 pl-6 pr-6 border border-nextjs transition-boxShadow hover:border-transparent hover:shadow-next cursor-move bg-white bg-opacity-90 max-w-sm`,
                      snapshot.isDragging ? 'shadow-2xl' : '',
                    )}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(provided.draggableProps.style)}
                  >
                    <Span className="text-black font-sans">
                      {loading ? '...' : doc.name}
                    </Span>
                    <span>
                      <FaBars size={24} color={theme.colors.black} />
                    </span>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DraggableFirestoreList
