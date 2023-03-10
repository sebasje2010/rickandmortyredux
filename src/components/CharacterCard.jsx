import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import './CharacterList.css'

const CharacterCard=()=>(
    <Card title='Rick' cover={<img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick" extra/>} extra={<StarOutlined/>}>
        <Meta description='Alive'/>
    </Card>
)

export default CharacterCard