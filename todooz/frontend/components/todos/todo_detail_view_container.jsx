
import { connect } from 'react-redux';

import { receiveTodo, removeTodo } from '../../actions/todo_actions';
import { receiveSteps } from '../../actions/step_actions';

import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  receiveSteps: steps => dispatch(receiveSteps(steps)),
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);