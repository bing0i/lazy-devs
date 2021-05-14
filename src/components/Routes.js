import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import TopicPage from './TopicPage';

export default function Routes() {
  const paths = [
    '/home',
    '/data-structures',
    '/sort-algorithms',
    '/search-algorithms',
  ];

  const cards = [
    {
      title: 'sdasd',
      detail: 'xznmbcnmzbxcnznxmjkahd',
      imagePath: '',
      imageAlt: 'alt',
    },
    {
      title: 'sdasd',
      detail: 'xznmbcnmzbxcnznxmjkahd',
      imagePath: '',
      imageAlt: 'alt',
    },
    {
      title: 'sdasd',
      detail: 'xznmbcnmzbxcnznxmjkahd',
      imagePath: '',
      imageAlt: 'alt',
    },
    {
      title: 'sdasd',
      detail: 'xznmbcnmzbxcnznxmjkahd',
      imagePath: '',
      imageAlt: 'alt',
    },
  ];

  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        {paths.map((path, index) => {
          return (
            <Route
              key={index}
              exact
              path={path}
              render={() => <TopicPage cards={cards} />}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}
