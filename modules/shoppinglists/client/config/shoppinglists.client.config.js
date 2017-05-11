(function () {
  'use strict';

  angular
    .module('shoppinglists')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'My Quest Log',
      state: 'shoppinglists',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'shoppinglists', {
      title: 'View My Quest Log',
      state: 'shoppinglists.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'shoppinglists', {
      title: 'Create New Quest',
      state: 'shoppinglists.create',
      roles: ['user']
    });
  }
}());
