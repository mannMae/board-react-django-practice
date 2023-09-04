import { useEffect, useState } from 'react';
import {
  BoxContent,
  BoxTitle,
  Buttons,
  ContentBox,
  Wrapper,
} from './Post.style';
import { getPost } from '../api/getPost';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from 'components/Layout';
import { Button } from 'components/Elements';
import { deletePost } from '../api/deletePost';

export const Post = () => {
  const [post, setPost] = useState();
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPost(postId).then((res) => setPost(res.data));
  }, []);

  const handleClickDelete = () => {
    deletePost(postId)
      .then(() => navigate(-1))
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
      <ContentBox>
        <BoxTitle>내용</BoxTitle>
        <BoxContent>{post?.content}</BoxContent>
      </ContentBox>
    </Wrapper>
  );
};
