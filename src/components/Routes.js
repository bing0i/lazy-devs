import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import TopicPage from './TopicPage';
import Post from './Post';

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
      title: 'sdasd ncmnxzmc',
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
        {cards.map((card, index) => {
          return (
            <Route
              key={index}
              exact
              path={('/' + card.title.toLowerCase()).replace(/\s/g, '-')}
              render={() => (
                <Post
                  title="nsds,mandm,s asdnmasndwqljkeqklw nsd"
                  introduction="Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
                  author="Meeeeeeeeee"
                  titleSections={[
                    'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ',
                    'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
                  ]}
                  sections={[
                    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`,
                    `Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.`,
                  ]}
                />
              )}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}
