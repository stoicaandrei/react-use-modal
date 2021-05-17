# react-use-modal-hook

Hook to wrap a component and show it as a modal.

It returns:
- Wrapped component as a new component.
- Display function.
- Status as a boolean.

## Table of Contents

- [Why](#why-usemodal)
- [Usage](#usage)
  - [Install](#install)
  - [How to use](#how-to-use)
  - [Pass more data to the modal](#pass-more-data-to-the-modal)

## Why useModal

With this hook, you can easily render components showing them as a modal:
- View components as a modals.
- Share logic to the modal component.
- Call the showModal function to open the modal.

## Usage

### Install:

```bash
npm install --save react-use-modal-hook

or

yarn add react-use-modal-hook
```

### How to use

For this example I'll be using [Ant Design's Modal](https://ant.design/components/modal/#header).

For the hook to work, the defined modal ***has to have*** `visible` and `hide` props;

#### Define Modal
```tsx
import React from 'react';

import { Modal } from 'antd';

type Props = {
  visible: boolean;
  hide: () => void;
}

const CustomModal: React.FC<Props> = ({ visible, hide }) => (
  <Modal visible={visible} onCancel={hide}>
    Hello, World!
  </Modal>
)

export default CustomModal;
```

#### Use it in your component

```tsx
import React from 'react';

import useModal from 'react-use-modal-hook';
import CustomModal from './CustomModal';

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

### Pass more data to the modal
The hook allows you to pass additional prosps via the `showModal` function. The arguments to the function will be the `Props` of the modal, minus `visible` and `hide`.

#### Define Modal
```tsx
import React from 'react';

import { Modal } from 'antd';

type Props = {
  visible: boolean;
  hide: () => void;
  title: string;
  content: string;
}

const CustomModal: React.FC<Props> = ({ visible, hide, title, content }) => (
  <Modal visible={visible} onCancel={hide} title={title}>
    {content}
  </Modal>
)

export default CustomModal;
```

#### Use it in your component

```tsx
import React from 'react';

import useModal from 'react-use-modal-hook';
import CustomModal from './CustomModal';

const YourComponent = props => {
  const [Modal, showModal, visible] = useModal(CustomModal);

  return (
    <div>
      <button onClick={() => showModal({ title: 'Title1', content: 'Hello there!' })}>show1</button>
      <button onClick={() => showModal({ title: 'Title2', content: 'How you doing?' })}>show1</button>
      <Modal />
    </div>
  )
}
```
