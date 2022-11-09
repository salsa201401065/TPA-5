import React from 'react';
import { Toaster } from 'react-hot-toast';
import Title from './components/Title';
import styles from './styles/modules/app.module.scss';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <>
      <div className="container">
        <Title>ToDo List</Title>
        <div className={styles.app__wrapper}>
          <Header />
          <Content />
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
