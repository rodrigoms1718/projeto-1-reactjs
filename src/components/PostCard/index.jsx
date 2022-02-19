export const PostCard = ({title, cover, body, id}) => (
    <div className='post'>
        <img src={cover} alt={title} />
        <div className="post-content">
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    </div>
);

/**
 * outra maneira de fazer
 */
// export const PostCard = ({post}) => {
//     // console.log(props);
//     //const {post} = props;
//     return (
        
//         <div className='post'>
//             <img src={post.cover} alt={post.title} />
//             <div key={post.id} className="post-content">
//                 <h1>{post.title}</h1>
//                 <p>{post.body}</p>
//             </div>
//         </div>
//     )
// }