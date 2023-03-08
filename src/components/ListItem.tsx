import React from 'react';

type ListItemProps = {
  item: string;
  setItem: (item: string) => void;
  deleteItem: () => void;
};

export default function ListItem(props: ListItemProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [inputString, setInputString] = React.useState('');
  // EXERCISE (4) -- Create an 'isCrossedOut' state
  // Write an event handler to toggle state
  const [isCrossedOut, setIsCrossedOut] = React.useState(false);

  const onCrossedOutToggle = () => {
    setIsCrossedOut((prev) => !prev);
  };

  const onItemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputString(event.target.value);
  };

  const onEdit = () => {
    setInputString(props.item);
    setIsEditing(true);
  };

  const onSave = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (inputString !== '') {
      props.setItem(inputString);
    }
    setIsEditing(false);
  };

  const onDelete = () => {
    props.deleteItem();
  };

  // EXERCISE (5) -- Set up conditional rendering to render the input box
  // If isEditing is true, render the edit form; else render the normal box
  const inputBox = () => (
    <form className="list-item__form" onSubmit={onSave}>
      <input
        type="text"
        name="itemName"
        id="itemName"
        className="list-item__input"
        value={inputString}
        onChange={onItemChange}
        autoFocus
        onFocus={(e) => e.target.select()}
        onBlur={onSave}
      />
      <button
        className="material-symbols-outlined list-item__button done"
        onClick={onSave}
      >
        done
      </button>
    </form>
  );

  const itemDisplay = () => (
    <>
      <div
        className={
          isCrossedOut
            ? 'list-item__text list-item__text--done'
            : 'list-item__text'
        }
        onClick={onCrossedOutToggle}
      >
        {props.item}
      </div>
      <button
        className="material-symbols-outlined list-item__button edit"
        onClick={onEdit}
      >
        edit
      </button>
      <button
        className="material-symbols-outlined list-item__button delete"
        onClick={onDelete}
      >
        delete
      </button>
    </>
  );

  return (
    <div className="list-item">{isEditing ? inputBox() : itemDisplay()}</div>
  );
}
