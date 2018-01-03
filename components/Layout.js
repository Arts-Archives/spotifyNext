import Header from './Header'

const Layout = (props) => (
    <div>
        <Header />
        <div className="container">
            <div className="col-md-12 mt-5">
                {props.children}
            </div>
        </div>
    </div>
)

export default Layout