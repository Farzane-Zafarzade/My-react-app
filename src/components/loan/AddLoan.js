import React,{useState} from 'react'



const AddLoan = ({onAdd}) => {
    const [text, setText] = useState('');
    const [description, setDescription] = useState('');
    const [paid, setPaid] = useState(false);

    const onSubmit=(e)=>{
        e.preventDefault();
        
        if(!text){
            alert("This feild can not be empty");
            return;
        }

        onAdd({text,description,paid});

        setText('');
        setDescription('');
        setPaid(false);
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label> Title </label>
                <input type="text"
                value={text}
                onChange={(e)=> setText(e.target.value)}
                 placeholder="Add loan"/>
            </div>
            <div className="form-control">
                <label> Dicribtion </label>
                <input type="text"
                value={description} 
                onChange={(e)=>{setDescription(e.target.value)}}
                placeholder="Add description"/>
            </div>
           <input type="submit" value=" Save" className="btn btn-block" />
            
        </form>
    )
}

export default AddLoan
