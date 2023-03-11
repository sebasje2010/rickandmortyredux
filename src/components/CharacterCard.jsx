import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import './CharacterList.css'

const CharacterCard=({name,image,species})=>(
    <Card title={name} cover={<img src={image} alt={name}/>} extra={<StarOutlined/>}>
        <Meta description={species}/>
    </Card>
)

export default CharacterCard