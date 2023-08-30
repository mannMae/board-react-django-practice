import { Header } from 'components/Layout';
import { Buttons, Wrapper } from './Post.style';
import { Button } from 'components/Elements';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPost } from '../api/getPost';
import { deletePost } from '../api/deletePost';

export const Post = () => {
  const [post, setPost] = useState();

  const navigate = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    getPost(postId)
      .then((res) => setPost(res.data))
      .catch((error) => console.error(error));
  }, []);
  if (!post) {
    return;
  }

  const handleClickDelete = () => {
    deletePost(postId)
      .then((res) => navigate(-1))
      .catch((error) => console.error(error));
  };

  return (
    <Wrapper>
      <Header
        title={post?.title}
        leftItem={
          <Button onClick={() => navigate(-1)} type="button">
            뒤로가기
          </Button>
        }
        rightItem={
          <Buttons>
            <Button onClick={() => handleClickDelete()} type="button">
              삭제하기
            </Button>
            <Button onClick={() => navigate('./edit')} type="button">
              수정하기
            </Button>
          </Buttons>
        }
      />
      {post?.content}
    </Wrapper>
  );
};
