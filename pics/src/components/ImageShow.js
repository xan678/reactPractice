const ImageShow = ({image}) => {
    return <div>
        <img src = {image.urls.small} atl = {image.alt_description}/>
    </div>
}

export default ImageShow;