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
      <NavigationBar categories={['home', ...categories, 'post']} />

      <Switch>
        <Route exact path="/post" render={() => <AddNewPostPage />} />

        {categories.map((category, index) => {
          return (
            <Route
              key={index}
              exact
              path={'/' + category}
              render={() => <CategoryPage category={category} />}
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
