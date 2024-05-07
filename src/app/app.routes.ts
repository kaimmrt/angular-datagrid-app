export const APP_ROUTES = [
  {
    path: '',
    loadChildren: () =>
      import('./views/home/home.routes').then((m) => m.HOME_ROUTES),
  },
];
