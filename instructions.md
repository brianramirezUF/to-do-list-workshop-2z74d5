
# Workshop Coding Instructions

## Exercise (1)
In App.tsx,
Create a Navbar component from scratch

Create the file /src/components/Navbar.tsx .

Contents of the file should look like this:

Navbar.tsx
```tsx
import React from 'react';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <h1>To Do</h1>
        </nav>
    );
}
```

Add the component to App.tsx.

App.tsx
```tsx
import React from 'react';
import ListContainer from './components/ListContainer';
import Navbar from './components/Navbar';

export default function App() {
  return (
        <>
            <Navbar />
            <ListContainer />
        </>
  );
}
```

## Exercise (2)
In ListContainer.tsx,
Add a required 'title' prop to ListContainer

Initial signature:

ListContainer.tsx
```tsx
export default function ListContainer()
```

Add type and props parameter:

ListContainer.tsx
```tsx
type ListContainerProps = {
    title: string
}
export default function ListContainer(props: ListContainerProps)
```

Reference props in return statement:

ListContainer.tsx
```tsx
return (
    <div className='list-container'>
        <h1>{props.title}</h1>
    ...
)
```

Add prop value to component in App.tsx:

App.tsx
```tsx
return (
    <>
        <Navbar />
        <ListContainer 
            title="School Work"
        />
    </>
  );
```

## Exercise (3)
In ListContainer.tsx,
Render ListItem components from an array

Initial return:

ListContainer.tsx
```tsx
<div className="list-container__list">
    <ListItem 
      item={schoolItems[0]} 
      setItem={item => setItem(0, item)} 
      deleteItem={() => deleteItem(0)}
    />
    <ListItem 
      item={schoolItems[1]} 
      setItem={item => setItem(1, item)} 
      deleteItem={() => deleteItem(1)}
    />
    <ListItem 
      item={schoolItems[2]} 
      setItem={item => setItem(2, item)} 
      deleteItem={() => deleteItem(2)}
    />
    <ListItem 
      item={schoolItems[3]} 
      setItem={item => setItem(3, item)} 
      deleteItem={() => deleteItem(3)}
    />
</div>
```

Add the following above the return statement:

ListContainer.tsx
```tsx
const listItems = schoolItems.map((elem, index) =>
    <ListItem
        key={index}
        item={elem}
        setItem={item => setItem(index, item)}
        deleteItem={() => deleteItem(index)}
      />
  );
```

Change the return statement to render `listItems` instead of the raw components:

ListContainer.tsx
```tsx
<div className="list-container__list">
    {listItems}
</div>
```

## Exercise (4)
In ListItem.tsx,
Create an `isCrossedOut` state

Add the following hook underneath the existing hooks

ListItem.tsx
```tsx
const [isCrossedOut, setIsCrossedOut] = React.useState(false);
```

Create an event handler to go with it

ListItem.tsx
```tsx
const onCrossedOutToggle = () => {
    setIsCrossedOut((prev) => !prev);
}
```

Reference the state ant the event handler in the itemDisplay function

ListItem.tsx
```tsx
const itemDisplay = () => (
    <>
      <div
        className={
          isCrossedOut ? 'list-item__text list-item__text--done' : 'list-item__text'
        }
        onClick={onCrossedOutToggle}
      >
        {props.item}
      </div>
```

## Exercise (5)
In ListItem.tsx,
Set up conditional rendering to render the input box

End of file looks like this:

ListItem.tsx
```tsx
return (
    <div className='list-item'>
      {itemDisplay()}
    </div>
  );
```

Return statement should look something like this when done:

ListItem.tsx
```tsx
return (
    <div className='list-item'>
      {isEditing
        ? inputBox()
        : itemDisplay()}
    </div>
  );
```

There may be alternatives that work.

## Exercise (6)
In ListContainer.tsx,
Add state for the form values

Go back and change the component array to use state:

ListContainer.tsx
```tsx
const listItems = items.map((elem, index) => {
    return (
      <ListItem
        key={index}
        item={elem}
        setItem={item => setItem(index, item)}
        deleteItem={() => deleteItem(index)}
      />
    )
  })
```

Input element currently looks like this:

ListContainer.tsx
```tsx
<input
    className='list-container__input'
    type="text"
    name="itemName"
    id="itemName"
/>
```

Change input element to look like this:

ListContainer.tsx
```tsx
<input
    className='list-container__input'
    type="text"
    name="itemName"
    id="itemName"
    value={inputString}
    onChange={(e) => setInputString(e.target.value)}
/>
```