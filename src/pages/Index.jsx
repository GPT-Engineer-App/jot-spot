import { useState } from 'react';
import { Box, Button, Container, Flex, IconButton, Input, Text, VStack } from '@chakra-ui/react';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';

const Note = ({ note, onDelete, onEdit }) => (
  <Flex p={4} boxShadow="md" borderRadius="lg" alignItems="center" justifyContent="space-between">
    <Text>{note.text}</Text>
    <Box>
      <IconButton aria-label="Edit note" icon={<FaEdit />} onClick={() => onEdit(note)} m={1} />
      <IconButton aria-label="Delete note" icon={<FaTrash />} onClick={() => onDelete(note.id)} m={1} />
    </Box>
  </Flex>
);

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const handleAddNote = () => {
    if (input.trim()) {
      const newNote = { id: Date.now(), text: input };
      setNotes([...notes, newNote]);
      setInput('');
    }
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleEditNote = (editedNote) => {
    const updatedNotes = notes.map(note => {
      if (note.id === editedNote.id) {
        return { ...note, text: editedNote.text };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4} align="stretch">
        <Flex justifyContent="space-between" alignItems="center">
          <Input placeholder="Add a new note..." value={input} onChange={(e) => setInput(e.target.value)} />
          <IconButton aria-label="Add note" icon={<FaPlus />} onClick={handleAddNote} />
        </Flex>
        {notes.map(note => (
          <Note key={note.id} note={note} onDelete={handleDeleteNote} onEdit={handleEditNote} />
        ))}
      </VStack>
    </Container>
  );
};

export default Index;