import './Comment.css';
import CommentData from '../../Json/CommentData';

const Comment = () => {
    return (
        <main id='test' className="container">
            <ul className="cards-Container">
                {CommentData.map((eachObj) => {
                const {id, name, email, body} = eachObj; 
                return <ListItem key={id} id={id} name={name} email={email} body={body}/>
            })}
            </ul>
        </main>
    );
}

export default Comment;

const ListItem = ( { name, email, body}) => {
    return (
        <li className='comment-Container'>
            <div className="comment-header">
                <h3 className="email">{email}</h3>
                <h3 className="name">{name}</h3>
            </div>
            <p className="comment">{body}</p>
        </li>
    ); 
}