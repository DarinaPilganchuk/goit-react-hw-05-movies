import { List, ImgCast, TitleCast, ItemCast } from './CastItem.styled';

const CastItem = ({ cast }) => {
  return (
    <List>
      {cast.map(item => {
        const photo = item.profile_path
          ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
          : 'https://st2.depositphotos.com/1898481/5240/i/600/depositphotos_52406655-stock-photo-unknown-person.jpg';
        return (
          <ItemCast key={item.id}>
            <ImgCast src={photo} alt={item.name} width="100" />
            <TitleCast>{item.name}</TitleCast>
            {item.character && <p>Character: {item.character}</p>}
          </ItemCast>
        );
      })}
    </List>
  );
};

export default CastItem;
