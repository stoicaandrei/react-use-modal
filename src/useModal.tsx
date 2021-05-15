import React, { useState } from 'react';

type ModalProps = {
  visible: boolean;
  hide: () => void;
};

type OmitModalProps<T> = Omit<T, 'visible' | 'hide'>;

const useModal = <T extends ModalProps>(
  Modal: React.FC<T>
): [React.FC, (data: OmitModalProps<T>) => void, boolean] => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [props, setProps] = useState<OmitModalProps<T>>();

  const showModal = (data: OmitModalProps<T>) => {
    setProps(data);
    setVisibleModal(true);
  };

  const hide = () => setVisibleModal(false);

  const RenderedModal: React.FC = () => (
    <Modal {...(props as T)} visible={visibleModal} hide={hide} />
  );

  return [RenderedModal, showModal, visibleModal];
};

export default useModal;
