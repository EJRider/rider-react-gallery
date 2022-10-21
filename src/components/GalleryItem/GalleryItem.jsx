function GalleryItem({item, putGallery, clicked}){
    if(clicked === true){
        return (
            <>
                <h3>{item.description}</h3>
                <p>Likes: {item.likes}</p>
            </>
        )
    }
    else{
    return(
        <>
            <img src={item.path}></img>
            <p>Likes: {item.likes}</p>
        </>
    )}
}

export default GalleryItem