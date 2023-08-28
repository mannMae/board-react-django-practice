import { Box, Button } from 'components/Elements';
import { Form, InputField } from 'components/Form';
import { Post, createPost, getPosts } from 'features/posts';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((res) => setPosts(res.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = () => {
    createPost({ title, content })
      .then((res) => {
        if (res.data?.id) {
          setPosts((prev) => [...prev, res.data]);
        }
        clearValues();
      })
      .catch((error) => console.error(error));
  };

  const clearValues = () => {
    setTitle('');
    setContent('');
  };

  return (
    <Section>
      <Box>
        <Form onSubmit={() => handleSubmit()}>
          <Box>
            <Box>
              <InputField
                label="제목"
                placeholder="제목을 입력해주세요"
                value={title}
                setValue={setTitle}
              />
              <InputField
                label="내용"
                placeholder="내용을 입력해주세요"
                value={content}
                setValue={setContent}
              />
            </Box>
            <Box flexDirection="row" width="100%">
              <Button width="100%" onClick={() => clearValues()} type="reset">
                취소
              </Button>
              <Button width="100%" type="submit">
                등록하기
              </Button>
            </Box>
          </Box>
        </Form>
        <Box>
          {posts.map((p, i) => (
            <Post
              key={i}
              title={p.title}
              content={p.content}
              id={p.id}
              setPosts={setPosts}
            />
          ))}
        </Box>
      </Box>
    </Section>
  );
}

export default App;

const Section = styled.section``;
