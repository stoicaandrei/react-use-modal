# react-use-modal

Hook to wrap a component and show it as a modal.

It returns:
- Wrapped component as a new component.
- Display function
- Status as a boolean.

## Why useModal

With this hook, you can easily render components showing them as a modal:
- View components as a modals.
- Share logic to the modal component.
- Call toggle function to open/close the modal.

## Usage

Just install:

```bash
npm install --save react-use-modal

or

yarn add react-use-modal
```

And import the hook:

```javascript
import useModal from 'react-use-modal';
```

Use it in your component:

```jsx
import CustomModal from 'components/CustomModal';

const YourComponent = props => {
  const [Modal, showModal, visible] = useModal(CustomModal);

  return (
    <div>
      <button onClick={showModal}>show modal</button>
      <Modal />
    </div>
  )
}
```
