
import React, {useState} from 'react'
import {Descriptions, Input} from 'antd'
import {Button} from 'react-bootstrap'
export const Post = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [postCard, setPostCard] = useState([])

    const handlePost = () => {
        if (title && description) {
            setTitle("")
            setDescription("")
            setPostCard([{title}, {description}, ...postCard])
        } else {
            alert('Fill all fields')
        }
        
    }
    return (
        <div>
            <label>Post Title</label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)}/>

            <label style={{marginTop: "30px"}}>Post Description</label>
            <Input style={{height: "25vh"}} value={description} onChange={(e) => setDescription(e.target.value)}></Input>
            
            <Button className="mt-3" onClick={handlePost}>Post</Button>
            {
                postCard.map((item, key) => {
                    return (
                        <>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </>
                    )
                })
            }
        </div>
    )
}

