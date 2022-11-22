function ProfileCard({title, handle, image}) {

    return (
        <div>
            <div>
                <img src={image} alt="Logo"/>
            </div>
            <div> Title is {title} </div>
            <div> Handle is {handle}</div>
        </div>
    );
}

export default ProfileCard;