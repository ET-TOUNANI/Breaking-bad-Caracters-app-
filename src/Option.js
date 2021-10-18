function Option(props) {
    return (
        <div className="car">
        {props.cara.map(posts => (
            <div className="okk">
                <img className="cir" src={posts.img} />
                <div className="v">
                <br /><br /><br /><br />
                    <h4>name : {posts.name}</h4><br />
                    <h4>birthday : {posts.birthday}</h4><br />
                    <h4>occupation : {posts.occupation[0]}</h4><br />
                </div>
            </div>
            

         ))
        
        }
        </div>
    )
}

export default Option
