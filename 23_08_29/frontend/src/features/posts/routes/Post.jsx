import { useNavigate, useParams } from 'react-router-dom';
import { Buttons, Content, Title, Wrapper } from './Post.style';
import { useEffect, useState } from 'react';
import { Button } from 'components/Elements';
import { deletePost, getPost } from 'features/posts';
import { Header } from 'components/Layout';

export const Post = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    getPost(postId)
      .then((res) => setPost(res.data))
      .catch((error) => console.error(error));
  }, []);

  const handleClickDelete = () => {
    deletePost(postId)
      .then((res) => {
        navigate(-1);
      })
      .catch((error) => console.error(error));
  };

  if (!post?.id) {
    return;
  }

  return (
    <Wrapper>
      <Header
        title={post.title}
        leftItem={<Button onClick={() => navigate(-1)}>뒤로가기</Button>}
        rightItem={
          <Buttons>
            <Button onClick={() => handleClickDelete()}>삭제하기</Button>
            <Button onClick={() => navigate('./edit')}>수정하기</Button>
          </Buttons>
        }
      />

      <Content>{post.content}</Content>
    </Wrapper>
  );
};
