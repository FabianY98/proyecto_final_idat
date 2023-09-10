export const Perfil = ({
    posts,
    comments,
    albums,
    photos,
    todos,
    users,
}) => {
    return (
        <div>
            <p>{id}.{users}
            </p>

            <p>Posts:</p> 
            <p>{posts}</p>

            <p>Comments:</p> 
            <p>{comments}</p>

            <p>Albums:</p> 
            <p>{albums}</p>
            
            <p>Fotos:</p> 
            <img src={photos} alt={name}/>
            
            <p>Listas:</p> 
            <p>{todos}</p>

        </div>
  );
};
