
function Gallery({ imgURL, title, artist }){
    return(
        <>
            <img src={ imgURL } alt={title} />
            <h3>{artist}</h3>
        </>
    )
}

export default Gallery