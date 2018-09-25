import React from 'react';
import Comment from '../containers/CommentContainer';
import AddComment from './AddComment';

const CommentsList = ({comments}) => 
  <ul>
    <AddComment />
    {comments.map(comment => 
    <Comment key={comment.id} {...comment}/>)}
  </ul>;

export default CommentsList;