import { EN, JP, ES } from './language.actions';

const initialState = {
  language: 'en',
};
const languageReduser = (state = initialState, actions) => {
  switch (actions.type) {
    case EN:
      return 'en';
    case ES:
      return 'es';
    case JP:
      return 'jp';
    default:
      return state;
  }
};

export default languageReduser;
