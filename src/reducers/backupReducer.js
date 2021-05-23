const initialState = {
  list: [],
  error: '',
  loading: false,
  locked: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'backup_fetch_success': {
      return {...state, list: action.payload, loading: false};
    }
    case 'backup_created_success': {
      return {...state, list: [...state.list, action.payload], loading: false};
    }
    case 'database_reset_success': {
      return {...state};
    }
    case 'database_wipe_success': {
      return {...state};
    }
    case 'lock_insert_success': {
      return {...state, locked: action.payload};
    }
    case 'lock_fetch_success': {
      return {...state, locked: true};
    }
    default:
      return state;
  }
}
