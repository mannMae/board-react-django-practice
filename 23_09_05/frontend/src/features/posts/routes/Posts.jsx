import { Header } from 'components/Layout';
import { Box, Post, PostContent, PostTitle, Wrapper } from './Posts.style';
import { useEffect, useState } from 'react';
import { getPosts } from '../api/getPosts';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Elements';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getPosts()
      .then((res) => setPosts(res.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <Wrapper>
      <Header title="게시물 목록" />
      <Box>
        {posts.map((post, i) => (
          <Post onClick={() => navigate(`./${post.id}`)}>
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.content}</PostContent>
          </Post>
        ))}
      </Box>
      <Button
        position="fixed"
        right="10%"
        bottom="10%"
        onClick={() => navigate('./write')}
      >
        게시물 작성
      </Button>
    </Wrapper>
  );
};
