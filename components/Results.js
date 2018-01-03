const Results = (props) => (
    <div className={props.columnWidth ? props.columnWidth : "col-md-4"}>
        <figure className="figure">
            {
                props.imageURL ?
                <img 
                    src={props.imageURL} 
                    className="figure-img img-fluid rounded" 
                    alt={props.name}
                    style={{height: 300, width: 300 }} 
                /> 
                : ''
            }
            <figcaption className="figure-caption">{props.name}</figcaption>
            <figcaption className="figure-caption">{props.children}</figcaption>
        </figure>
    </div>
)

export default Results