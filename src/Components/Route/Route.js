import React, {useEffect} from 'react';
import {BrowserRouter, Route, Redirect,Link, useHistory,NavLink, Switch} from 'react-router-dom'
import {Result, Button,message, Skeleton} from 'antd';
import Loading from '../Loading/Loading'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Layout from '../Layout/Layout'
import axios from "axios";
const HomePage = React.lazy(() => import('../../Vues/HomePage/HomePage'))
const ABoutPage = React.lazy(() => import('../../Vues/AboutPage/AboutPage'))
const ProductPage = React.lazy(() => import('../../Vues/ProductPage/Productpage'))
const ProductItemPage = React.lazy(() => import('../../Vues/ProductItemPage/ProductItemPage'))
const DocumentPage = React.lazy(() => import('../../Vues/DocumentPage/DocumentPage'))
const FAQPage = React.lazy(() => import('../../Vues/FAQPage/FAQPaage'))
const IOT = React.lazy(() => import('../../Vues/IotPlatform/IotPlatform'))
const ContactPage = React.lazy(() => import('../../Vues/ContactPage/ContactPage'))
const NewsPage = React.lazy(() => import('../../Vues/NewsPage/NewsPage'))
const ItemNews = React.lazy(() => import('../../Vues/ItemmNews/ItemNews'))
const ServisePage = React.lazy(() => import('../../Vues/ServisePage/ServisePage'))
const LoginPage = React.lazy(() => import('../../Vues/LoginPage/LoginPage'))
const HelloBlokAdmin = React.lazy(() => import('../../Vues/AdminPage/HelloBlokAdmin'))
const SirvisePageHome = React.lazy(() => import('../../Vues/AdminPage/SirvisePageHome'))
const PartnerAdmin = React.lazy(() => import('../../Vues/AdminPage/PartnerAdmin'))
const NewsAdmin = React.lazy(() => import('../../Vues/AdminPage/NewsAdmin'))
const AboutAdmin = React.lazy(() => import('../../Vues/AdminPage/AboutAdmin'))
const PlatformAdmin = React.lazy(() => import('../../Vues/AdminPage/PlatformAdmin'))
const DocumentAdmin = React.lazy(() => import('../../Vues/AdminPage/DocumenAdmin'))
const ServiseAdmin = React.lazy(() => import('../../Vues/AdminPage/ServiseAdmin'))
const FaqAdmin = React.lazy(() => import('../../Vues/AdminPage/FaqAdmin'))
const ProductsAdmin = React.lazy(() => import('../../Vues/AdminPage/ProdictsAdmin'))
const ContactPageAdmin = React.lazy(() => import('../../Vues/AdminPage/ContactPageAdmin'))
const Politic = React.lazy(() => import('../../Vues/FooterPage/Politic'))
const CookieOffer = React.lazy(() => import('../../Vues/FooterPage/CookieOffer'))
const PublicOffer = React.lazy(() => import('../../Vues/FooterPage/Politic'))

let AdminMenu=[

    {
        to:"/adminPartner",
        title:"Партнеры",
        key:2
    },
    {
        to:"/adminNews",
        title:"Новости",
        key:3
    },
    // {
    //     to:"/AboutAdmin",
    //     title:"О компании",
    //     key:3
    // },
    // {
    //     to:"/platformAdmin",
    //     title:"IOT платформа",
    //     key:4
    // },
    {
        to:"/DocumentAdmin",
        title:"Документы",
        key:5
    },
    // {
    //     to:"/ServiseAdmin",
    //     title:"Сервис",
    //     key:6
    // },
    {
        to:"/FaqAdmin",
        title:"FAQ",
        key:7
    },
    {
        to:"/ProductsAdmin",
        title:"Продукция",
        key:8
    },
    {
        to:"/ContactPageAdmin",
        title:"Контакты",
        key:8
    },

]
const scrolPublic = () => {
    window.scrollTo(0, 0)
    return true
}
// eslint-disable-next-line react/prop-types
const ScrollPublicRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => (scrolPublic() ?
            <Layout {...props}>

                <Component {...props} />

            </Layout>
            : '')}

    />
)

const chekAutch = async ({history}) => {
    let auch = true
    if (localStorage.getItem('key') === null) {
        auch = false
    }else{
        try {
            let result = await axios.get('api/rest/user/ChekToken', {
                headers: {
                    "x-access-token": localStorage.getItem('key')
                }})

        }catch (error) {
            message.error(error.response.data.message)

            if(error.response.data.autch === false){
                localStorage.clear()
                auch=false
            }
        }
    }

    window.scrollTo(0, 0)

    if (auch===false){
        history.push('/')
    }
    return auch
}
const AutchRouter = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            chekAutch(props) ? (
                <Layout {...props}>
                    <div className='page-content'>
                        <div className='box-contents'>
                            <div  className='button-group'>
                                {AdminMenu && AdminMenu.length>0? AdminMenu.map(el=>{
                                    return <NavLink style={{
                                        marginLeft:10,
                                        marginTop:5
                                    }} activeStyle={{
                                        color:"#fff"
                                    }} activeClassName={'btn button-action-bg-body'} to={el.to} key={el.key}  className={"btn button-action-body"} >{el.title}</NavLink>
                                }):""}
                                <Link style={{
                                    marginLeft:10,
                                    marginTop:5
                                }}   to={'/'} onClick={()=>{
                                    localStorage.clear()
                                }}  className={"btn button-action-bg-body"} >Выход из системы</Link>
                            </div>
                            <Component {...props} />
                        </div>

                    </div>
                </Layout>
            ) : (
                <Redirect
                    to={{
                        pathname: '/'
                    }}
                />
            )
        }
    />
)

let NotFoundPage = () => {
    const history = useHistory();

    return (
        <div className='no-found'>
            <Result
                status="404"
                title="404"
                subTitle="К сожалению, страница, которую вы посетили, не существует."
                extra={<Button onClick={() => {
                    history.push('/')
                }} type="primary">Вернуться на главную</Button>}
            />
        </div>
    )
}


let RouteApp=()=>{
    useEffect(()=>{
        if (localStorage.getItem('lang') !== 'EN' && localStorage.getItem('lang') !== 'RU') {
            localStorage.setItem('lang', 'RU')

        }
    },[])
    return(
        <React.Fragment>
            <BrowserRouter>
                <React.Suspense fallback={Loading()}>
                    <Switch>
                        <ScrollPublicRoute exact path="/" component={(props) => <ErrorBoundary><HomePage {...props} /></ErrorBoundary>}/>
                        <ScrollPublicRoute  path="/about" component={(props) => <ErrorBoundary><ABoutPage {...props}/></ErrorBoundary>}/>
                        <ScrollPublicRoute exact path="/products" component={(props) => <ErrorBoundary><ProductPage {...props}/></ErrorBoundary>}/>
                        <ScrollPublicRoute exact path="/document" component={(props) => <ErrorBoundary><DocumentPage {...props}/></ErrorBoundary>}/>
                        <ScrollPublicRoute exact path="/faq" component={(props) => <ErrorBoundary><FAQPage {...props}/></ErrorBoundary>}/>
                        <ScrollPublicRoute exact path="/platform" component={(props) => <ErrorBoundary><IOT {...props}/></ErrorBoundary>}/>
                        <ScrollPublicRoute exact path="/contact" component={(props) => <ErrorBoundary><ContactPage {...props}/></ErrorBoundary>}/>
                        <ScrollPublicRoute exact path="/service" component={(props) => <ErrorBoundary><ServisePage {...props}/></ErrorBoundary>}/>
                        <ScrollPublicRoute exact path="/news" component={(props) => <ErrorBoundary><NewsPage {...props} /></ErrorBoundary>}/>
                        <ScrollPublicRoute exact path="/Politic" component={(props) => <ErrorBoundary><Politic {...props} /></ErrorBoundary>}/>
                        <ScrollPublicRoute exact path="/PublicOffer" component={(props) => <ErrorBoundary><PublicOffer {...props} /></ErrorBoundary>}/>
                        <ScrollPublicRoute exact path="/CookieOffer" component={(props) => <ErrorBoundary><CookieOffer {...props} /></ErrorBoundary>}/>
                        <ScrollPublicRoute exact path="/news/:id" component={(props) => <ErrorBoundary><ItemNews {...props} /></ErrorBoundary>}/>
                        <ScrollPublicRoute exact path="/products/:id" component={(props) => <ErrorBoundary><ProductItemPage {...props}/></ErrorBoundary>}/>
                        {/*<AutchRouter exact path="/admin" component={(props) => <ErrorBoundary><HelloBlokAdmin {...props} /></ErrorBoundary>}/>*/}
                        {/*<AutchRouter exact path="/adminService" component={(props) => <ErrorBoundary><SirvisePageHome {...props} /></ErrorBoundary>}/>*/}
                        <AutchRouter exact path="/adminPartner" component={(props) => <ErrorBoundary><PartnerAdmin {...props} /></ErrorBoundary>}/>
                        <AutchRouter exact path="/adminNews" component={(props) => <ErrorBoundary><NewsAdmin {...props} /></ErrorBoundary>}/>
                        {/*<AutchRouter exact path="/AboutAdmin" component={(props) => <ErrorBoundary><AboutAdmin {...props} /></ErrorBoundary>}/>*/}
                        {/*<AutchRouter exact path="/platformAdmin" component={(props) => <ErrorBoundary><PlatformAdmin {...props} /></ErrorBoundary>}/>*/}
                        <AutchRouter exact path="/DocumentAdmin" component={(props) => <ErrorBoundary><DocumentAdmin {...props} /></ErrorBoundary>}/>
                        {/*<AutchRouter exact path="/ServiseAdmin" component={(props) => <ErrorBoundary><ServiseAdmin {...props} /></ErrorBoundary>}/>*/}
                        <AutchRouter exact path="/FaqAdmin" component={(props) => <ErrorBoundary><FaqAdmin {...props} /></ErrorBoundary>}/>
                        <AutchRouter exact path="/ProductsAdmin" component={(props) => <ErrorBoundary><ProductsAdmin {...props} /></ErrorBoundary>}/>
                        <AutchRouter exact path="/ContactPageAdmin" component={(props) => <ErrorBoundary><ContactPageAdmin {...props} /></ErrorBoundary>}/>
                        <Route exact path="/waviotloginadmin"  render={(props) => <LoginPage {...props}/>}/>

                        <ScrollPublicRoute component={(props) => <NotFoundPage {...props}/>}/>

                    </Switch>
                </React.Suspense>
            </BrowserRouter>
        </React.Fragment>
    )
}
export default RouteApp
