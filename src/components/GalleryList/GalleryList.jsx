import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({gallery, putGallery, clicked}){
    
    return (
        gallery.map(item =>(
            <GalleryItem item={item} putGallery={putGallery} clicked={clicked}/>
        ))
    )
}

export default GalleryList;