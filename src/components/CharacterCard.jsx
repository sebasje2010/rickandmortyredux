import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";
import './CharacterList.css'
import StarButton from './StarButton'

const CharacterCard=({name,image,species,id,favorite})=>{
    const dispatch=useDispatch()
    const handleOnFavorite=()=>{
        dispatch(setFavorite({characterId:id}))
    }
    return (
    <Card title={name} cover={<img src={image} key={id} alt={name}/>} extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}>
        <Meta description={species}/>
    </Card>
    )
    }
export default CharacterCard