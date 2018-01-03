import Layout from '../components/Layout'
import Link from 'next/link'

const Index = () => (
   <Layout>
    <div className="row mt-5 justify-content-center">
        <h1>Welcome to spotifyNext!</h1>
    </div>
    <div className="row mt-5 justify-content-center">
        <div className="col-md-4">
            <img src="https://goo.gl/Lh8jsk" className="img-responsive" width="300" height="224" />
        </div>
        <div className="col-md-4">
            <img src="https://goo.gl/7hGpcw" className="img-responsive" width="300" height="224" />
        </div>
        <div className="col-md-4">
            <img src="https://reactjs.org/logo-og.png" className="img-responsive" width="300" height="224" />
        </div>
    </div>
    <div className="row mt-5 justify-content-center">
        <h3>Built with the Spotify Web API, React JS, and Next JS for server side rendering!</h3>
    </div>
    <div className="row mt-5 justify-content-center">
        <Link href="/spotify">
            <a className="btn btn-success">Enter</a>
        </Link>
    </div>
   </Layout>
)

export default Index