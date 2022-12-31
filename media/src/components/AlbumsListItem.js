import { GoTrashcan } from 'react-icons/go';
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumsMutation } from "../store";
import PhotosList from './PhotosList';

const AlbumListItem = ({album}) => {
    
    const [removeAlbum, results] = useRemoveAlbumsMutation();

    const handleRemoveAlbum = (album) => {
        //console.log(album);
        removeAlbum(album.id);
    }
    const header = (
        <>
            <Button className = "mr-2" loading={results.isLoading} onClick = {() => handleRemoveAlbum(album)}>
                <GoTrashcan/>
            </Button>
            {album.title}
        </>
        );

    return <ExpandablePanel header={header} key={album.id}>
        <PhotosList album={album}/>
    </ExpandablePanel>
}

export default AlbumListItem;