import Image from "./Image";
import NoImages from "./NoImages";

const Gallery = props => {

    const results = props.data;

    return (
        <div>
            <ul>
                {results.length > 0 ? results.map(image => {
                    let farm = image.farm;
                    let server = image.server;
                    let id = image.id;
                    let secret = image.secret;
                    let title = image.title;
                    let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
                    return <Image url={url} key={id} alt={title} />
                })
                    : <NoImages />
                }
            </ul>
        </div>
    )
}

export default Gallery