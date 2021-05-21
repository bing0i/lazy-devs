import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import CategoryPage from './CategoryPage';
import { useSelector } from 'react-redux';
import AddNewPostPage from './AddNewPostPage';
import Post from './Post';

export default function Routes() {
  const categories = useSelector((state) => state.categories);
  const posts = useSelector((state) => state.posts);

  return (
    <BrowserRouter>
      <NavigationBar
        categories={[
          'home',
          ...categories.map((category) => category.title),
          'post',
        ]}
      />

      <Switch>
        <Route exact path="/post" render={() => <AddNewPostPage />} />

        {categories.map((category) => {
          return (
            <Route
              key={category._id}
              exact
              path={'/' + category.title}
              render={() => <CategoryPage category={category.title} />}
            />
          );
        })}

        {posts.map((post) => {
          return (
            <Route
              key={post._id}
              exact
              path={'/' + post.category + '/' + post._id}
              render={() => <Post post={post} />}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}
