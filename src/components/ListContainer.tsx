import React from 'react';
import ListItem from './ListItem';

// EXERCISE (2) -- Add a required 'title' prop to ListContainer
// Reference it in the return statement below
type ListContainerProps = {
  title: string;
};

export default function ListContainer(props: ListContainerProps) {
  // EXERCISE (6) -- Add state for the form values
  // Changes to the form should update state, state changes the value of the form
  const [inputString, setInputString] = React.useState('');
  const [items, setItems] = React.useState<string[]>([]);

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (inputString !== '') {
      setItems((prev) => [...prev, inputString]);
      setInputString('');
    }
  };

  const setItem = (index: number, item: string) => {
    setItems((items) => {
      let newItems = [...items];
      newItems.splice(index, 1, item);
      return newItems;
    });
  };
  const deleteItem = (index: number) => {
    setItems((items) => {
      let newItems = [...items];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  // EXERCISE (3) -- Render ListItem components from an array
  // Use the map function to map array elements to components
  const schoolItems = [
    'Read textbook chapters 1-2',
    'Do homework on pages 20-22',
    'Work on programming project',
    'Go to office hours',
  ];

  const listItems = items.map((elem, index) => {
    return (
      <ListItem
        key={index}
        item={elem}
        setItem={(item) => setItem(index, item)}
        deleteItem={() => deleteItem(index)}
      />
    );
  });

  return (
    <div className="list-container">
      <h1>{props.title}</h1>
      <form className="list-container__form" onSubmit={onSubmit}>
        <input
          className="list-container__input"
          type="text"
          name="itemName"
          id="itemName"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className="list-container__list">{listItems}</div>
    </div>
  );
}
