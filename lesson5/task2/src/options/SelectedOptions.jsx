import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selectors';
import Options from './Options';
import { toogleOption } from './options.actions';

const mapState = state => ({
  options: selectedOptionsSelector(state),
});
const mapDispatch = {
  moveOption: toogleOption,
};
export default connect(mapState, mapDispatch)(Options);
