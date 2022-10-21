import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({gallery, putGallery, likeImage}){
    
    return (
        gallery.map(item =>(
            <GalleryItem item={item} putGallery={putGallery} likeImage={likeImage}/>
        ))
    )
}

export default GalleryList;