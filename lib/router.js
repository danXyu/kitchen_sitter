/* Router: Configure the router with layout, loading, and notFound templates. These provide the
 * base templates for rendering the view according to the routes requested.
 */
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

/* Route: '/',
 */
Router.route('/', {
  name: 'homepage'
});