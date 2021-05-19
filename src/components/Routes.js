import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import CategoryPage from './CategoryPage';
import PostForm from './PostForm';
import { useSelector } from 'react-redux';

export default function Routes() {
  const categories = useSelector((state) => state.categories);
  const paths = categories.map((category) => category.replace(/\s/g, '-'));

  return (
    <BrowserRouter>
      <NavigationBar categories={['home', ...categories, 'create a post']} />

      <Route exact path="/" render={() => <p>Home page</p>} />
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

        <Route
          exact
          path="/create-a-post"
          render={() => <PostForm categories={categories} />}
        />
      </Switch>
    </BrowserRouter>
  );
}
