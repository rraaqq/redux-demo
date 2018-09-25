import {connect} from 'react-redux';
import Comment from '../components/Comment';
import {thumbUpComment} from '../actions/actions';
import {thumbDownComment} from '../actions/actions';
import {removeComment} from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  removeComment: (id) => dispatch(removeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);