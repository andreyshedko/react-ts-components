import React from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './App.module.scss';
import { BadgeInfoComponent } from './pages/badge/badge';
import HomeComponent from './pages/home/home';
import { CardInfoComponent } from './pages/card/card';

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.app_header}>
        React TypeScript Components
      </header>
      <Switch>
        <Route path="/card" component={CardInfoComponent} />
        <Route path="/badge" component={BadgeInfoComponent} />
        <Route path="/" component={HomeComponent} />
      </Switch>
    </div>
  );
}

export default App;
