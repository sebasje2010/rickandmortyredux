import { Card } from "antd";
import { Link } from "react-router-dom";
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
    <Card title={name} cover={<img src={image} alt={name}/>} key={id} extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}>
        <Link to={`/character/${id}`} key={id}>
        <Meta description='Detailed Information'/>
        </Link>
    </Card>
    )
    }
export default CharacterCard