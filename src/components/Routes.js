import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import CategoryPage from './CategoryPage';
import { useSelector } from 'react-redux';
import AddNewPostPage from './AddNewPostPage';

export default function Routes() {
  const categories = useSelector((state) => state.categories);
  const paths = categories.map((category) => category.replace(/\s/g, '-'));

  return (
    <BrowserRouter>
      <NavigationBar categories={['home', ...categories, 'post']} />

      <Switch>
        {paths.map((path, index) => {
          return (
            <Route
              key={index}
              exact
              path={'/' + path}
              render={() => <CategoryPage category={categories[index]} />}
            />
          );
        })}

        <Route exact path="/post" render={() => <AddNewPostPage />} />
      </Switch>
    </BrowserRouter>
  );
}
