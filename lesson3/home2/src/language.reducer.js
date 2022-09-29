const languageReduser = (state = 'en', actions) => {
  switch (actions.type) {
    case 'en':
      return 'en';
    case 'es':
      return 'es';
    case 'jp':
      return 'jp';
    default:
      return state;
  }
};

export default languageReduser;
