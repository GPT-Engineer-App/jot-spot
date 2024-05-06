import { useState } from 'react';
import { Box, Button, Container, Flex, IconButton, Input, Text, VStack } from '@chakra-ui/react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const addNote = () => {
    if (input.trim()) {
      setNotes([...notes, input]);
      setInput('');
    }
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <Container maxW="container.md" p={4}>
      <Flex direction="column" align="center" justify="center" minHeight="100vh">
        <VStack spacing={4} w="full">
          <Flex as="nav" w="full" justify="space-between" p={4}>
            <Text fontSize="2xl" fontWeight="bold">Notes</Text>
          </Flex>
          <Flex w="full">
            <Input
              placeholder="Add a new note"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(event) => event.key === 'Enter' && addNote()}
            />
            <IconButton
              aria-label="Add note"
              icon={<FaPlus />}
              onClick={addNote}
              ml={2}
            />
          </Flex>
          <VStack spacing={4} w="full">
            {notes.map((note, index) => (
              <Flex key={index} w="full" justify="space-between" p={4} borderWidth="1px" borderRadius="lg">
                <Text>{note}</Text>
                <IconButton
                  aria-label="Delete note"
                  icon={<FaTrash />}
                  onClick={() => deleteNote(index)}
                />
              </Flex>
            ))}
          </VStack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;