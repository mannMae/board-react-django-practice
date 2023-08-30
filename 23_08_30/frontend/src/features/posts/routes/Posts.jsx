import { Header } from 'components/Layout';
import { Post, PostContent, PostTitle, Wrapper } from './Posts.style';
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
      <Header title="게시글 목록" />
      {posts.map((p, i) => (
        <Post key={i} onClick={() => navigate(`./${p.id}`)}>
          <PostTitle>{p.title}</PostTitle>
          <PostContent>{p.content}</PostContent>
        </Post>
      ))}
      <Button
        position="fixed"
        bottom="10%"
        right="10%"
        onClick={() => navigate('./write')}
      >
        게시글 작성
      </Button>
    </Wrapper>
  );
};
