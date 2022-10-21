function GalleryItem({item, putGallery, likeImage}){

    const swapValues = () => {
        let itemId = item.id;
        putGallery(itemId);

    }

    const packageLike = () => {
        let itemId = item.id;
        likeImage(itemId);
    }

    if(item.clicked === true){
        return (
            <>
            <div key={item.id} >
                <h3 onClick={swapValues}>{item.description}</h3>
                <p>Likes: {item.likes}</p>
                <button onClick={packageLike}>Like</button>
            </div>
            </>
        )
    }
    else{
    return(
        <>
        <div key={item.id}>
            <img onClick={swapValues} src={item.path}></img>
            <p>Likes: {item.likes}</p>
            <button onClick={packageLike}>Like</button>
        </div>
        </>
    )
}
}

export default GalleryItem