
export const findFolder = (folder_table=[], folderId) =>
  folder_table.find(folder_table => folder_table.id === folderId)

export const findNote = (note_table=[], noteId) =>
  note_table.find(note_table => note_table.id === noteId)

export const getNotesForFolder = (note_table=[], folderId) => (
  (!folderId)
    ? note_table
    : note_table.filter(note_table => note_table.folderId === folderId)
)

export const countNotesForFolder = (note_table=[], folderId) =>
  note_table.filter(note_table => note_table.folderId === folderId).length
