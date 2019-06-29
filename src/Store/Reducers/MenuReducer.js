const initState = {
    menus: [
        {id: '1', title: 'Sidhi biryani', content: 'Biryani' },
        {id: '2', title: 'Bombay biryani', content: 'Biryani' },
        {id: '3', title: 'Tikka biryani', content: 'Biryani' }
    ]
}
const MenuReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_MENU':
        console.log('created menu', action.menu);
        return state;
      case 'CREATE_MENU_ERROR':
        console.log('create menu err', action.err )
        return state;
      default:
        return state;
    }
  };

export default MenuReducer; 