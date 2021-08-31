import React, { useState } from 'react';
import { Modal } from 'antd';
import Draggable from 'react-draggable';
import Cal from './Cal';
import './btn.css';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isButton, setIsButton] = useState(true);
  const showModal = () => {
    if (isButton) {
      setIsModalVisible(true);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Draggable
        axis='both'
        handle='.handle'
        defaultPosition={{
          x: window.innerWidth * 0.9,
          y: window.innerHeight * 0.05,
        }}
        position={null}
        grid={[1, 1]}
        scale={1}
        onStart={() => {}}
        onDrag={() => {
          if (isButton) {
            setIsButton(false);
          }
        }}
        onStop={() => {
          setTimeout(() => {
            setIsButton(true);
          }, 100);
        }}
      >
        <div
          className={'handle'}
          // style={{ position: 'absolute' }}
          onClick={showModal}
        >
          Btn
        </div>
      </Draggable>

      <Modal
        title='数据处理'
        visible={isModalVisible}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={window.innerWidth * 0.6}
        style={{
          // width: '100px',
          height: window.innerHeight * 0.7 + 'px',
        }}
      >
        <Cal></Cal>
      </Modal>
    </>
  );
};

export default App;
