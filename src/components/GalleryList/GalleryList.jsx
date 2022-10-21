import GalleryItem from "../GalleryItem/GalleryItem";
function GalleryList({gallery, putGallery}){
    return (
        gallery.map(item =>{
            <GalleryItem gallery={gallery} putGallery={putGallery}/>
        })
    )
}

export default GalleryList;