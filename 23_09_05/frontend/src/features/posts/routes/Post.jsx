import { Header } from 'components/Layout';
import { Box, BoxContent, BoxTitle, Buttons, Wrapper } from './Post.style';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPost } from '../api/getPost';
import { Button } from 'components/Elements';
import { deletePost } from '../api/deletePost';

export const Post = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState();

  useEffect(() => {
    getPost(postId).then((res) => setPost(res.data));
  }, []);

  const handleClickDelete = () => {
    deletePost(postId)
      .then((res) => {
        if (res.data === 'deleted') {
          navigate(-1);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <Wrapper>
      <Header
        title={post?.title}
        leftItem={<Button onClick={() => navigate(-1)}>뒤로가기</Button>}
        rightItem={
          <Buttons>
            <Button onClick={() => navigate('./edit')}>수정하기</Button>
            <Button onClick={() => handleClickDelete()}>삭제하기</Button>
          </Buttons>
        }
      />
      <Box>
        <BoxTitle>내용</BoxTitle>
        <BoxContent>{post?.content}</BoxContent>
      </Box>
    </Wrapper>
  );
};
