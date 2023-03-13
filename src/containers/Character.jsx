import { useEffect } from 'react';
import { Card, Row } from "antd";
import {Descriptions} from 'antd';
import { useSelector,useDispatch, shallowEqual } from 'react-redux';
import { fetchCharacters } from '../slices/dataSlice';
import { useParams } from 'react-router-dom';
import './Character.css'

function Character() {
    const param=useParams()
    const characters=useSelector((state)=>state.data.charactersFiltered,shallowEqual)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchCharacters())
    },[])
  return (
    <div className='Character-Info'>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align='middle' justify='center'>
            <Card style={{width: 550}} title='Character Info' cover={<img src={characters[param.id-1].image} alt={characters[param.id-1].name}/>}>
                <Descriptions title="Details">
                    <Descriptions.Item label="Name">{characters[param.id-1].name}</Descriptions.Item>
                    <Descriptions.Item label="Status">{characters[param.id-1].status}</Descriptions.Item>
                    <Descriptions.Item label="Species">{characters[param.id-1].species}</Descriptions.Item>
                    <Descriptions.Item label="Type">{characters[param.id-1].type||'N/A'}</Descriptions.Item>
                    <Descriptions.Item label="Gender">{characters[param.id-1].gender}</Descriptions.Item>
                    <Descriptions.Item label="Location">{characters[param.id-1].location.name}</Descriptions.Item>
                </Descriptions>
            </Card>
        </Row>
    </div>
  );
}

export default Character;