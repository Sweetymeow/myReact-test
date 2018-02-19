import notes from '../data/notes.json';

const noteItems = notes.notes.length;

// Test number of note item in notes data
test('Number of notes >= 3', () => {
  expect(noteItems).toBeGreaterThanOrEqual(3);
});
