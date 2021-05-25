import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import CategoryPage from './CategoryPage';
import { useSelector } from 'react-redux';
import AddNewPostPage from './AddNewPostPage';
import Post from './Post';
import ErrorPage from './ErrorPage';
import LoginPage from './LoginPage';
import Homepage from './Homepage';

export default function Routes() {
  const categories = useSelector((state) => state.categories);
  const posts = useSelector((state) => state.posts);
  const errors = useSelector((state) => state.errors);
  const isLogin = useSelector((state) => state.isLogin);

  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        {errors.length !== 0 ? (
          <Route exact path="/error" render={() => <ErrorPage />} />
        ) : (
          <Route
            exact
            path="/error"
            render={() => (
              <h1 className="my-8 text-3xl font-bold text-center text-yellow-500">
                Are you lost?
              </h1>
            )}
          />
        )}

        <Route exact path="/login" component={LoginPage}>
          {isLogin && <Redirect to="/" />}
        </Route>

        <Route exact path="/" component={Homepage} />

        <Route exact path="/post" component={AddNewPostPage} />

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
