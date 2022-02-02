import { textDots } from "../../utils/textDots";
import "./style.css";
export function FilmContent(props){
    const {title,subtitle,description,list} = props;
    function renderFarm(){
        return list.map(function(item){
            const {image,faTitle,enTitle,id,isFree}= item
            return(
                <li key={id}>
                    <a>
                        {isFree ? <p className="free-badge">رایگان</p> : ""}
                        <img src={image} />
                        <p>{textDots(faTitle,10)}</p>
                        <p>{textDots(enTitle,5)}</p>
                    </a>
                </li>
            )
        })
    }
    return (
        <div className="film-content">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
            <p className="desc">{description}</p>
            <ul>
            {renderFarm()}
            </ul>
        </div>
    )
}
export default FilmContent;