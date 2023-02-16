//import { Wrapper, Input, Icon } from './SearchBox.styled';
import { useSearchParams } from 'react-router-dom';
import { Input, Button, Wrapper } from './SearchBox.styled';
export const SearchBox = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmitForm = e => {
    e.preventDefault();

    if (e.target[0].value.trim().length === 0) {
      alert('Please, enter another value');
      return;
    }
    setSearchParams({ query: e.target[0].value });
  };
  return (
    <Wrapper onSubmit={handleSubmitForm}>
      <Input type="text" />
      <Button type="submit">Search</Button>
    </Wrapper>
  );
};
