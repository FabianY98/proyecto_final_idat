import { Perfil } from './Perfil';
import {useFetch} from '../hooks/useFetch';

export const JsonPlaceHolderData = () => {
  const { data, error, isLoading } = useFetch(
    'https://jsonplaceholder.typicode.com/api'
  );

  if (isLoading) {
    return (
        <div>
            <p>Cargando...</p>
        </div>
    );
  }

  if (error) {
    <div>
        <p>Ocurrió un error {JSON.stringify(error)}</p>
    </div>;
  }

  console.log(data.results);

  return (
    <div>
      {data?.results?.map(
        ({posts, comments, albums, photos, todos, users}) => (
          <Perfil
            key={users.toString()}
            posts={posts}
            comments={comments}
            albums={albums}
            photos={photos}
            todos={todos}
            users={users}
          />  
        )
      )}
    </div>
  );
};
