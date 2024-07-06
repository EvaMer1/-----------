import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png"

const Prew = () => {
    return ( 
        <div>
            <header style={{
                display: "flex",
                borderBottom: "3px solid white",
            }}>
                <img src={logo} alt="" style={{
                    width: 212,
                    height: 89,
                }} />
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "auto",
                    padding: 12,
                    gap: 12,
                    paddingRight: 70
                }}>
                    <div style={{
                        display: "flex",
                        gap: 50,
                        marginRight: 180
                    }}>
                        <button style={{
                            display: 'flex',
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingBottom: 10,
                            paddingTop: 10,
                            borderRadius: 10,
                            backgroundColor: "white",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "2px solid red",
                            width: 300
                        }}><Link to={'about'}> О компании </Link> </button>
                        <button style={{
                            display: 'flex',
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingBottom: 10,
                            paddingTop: 10,
                            borderRadius: 10,
                            backgroundColor: "white",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "2px solid red",
                            width: 300
                        }}><Link to={"/"}>Главная</Link></button>
                    </div>
                    <div style={{
                        display: "flex",
                        gap: 50,
                        marginLeft: "auto",
                    }}>
                        <button style={{
                            display: 'flex',
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingBottom: 10,
                            paddingTop: 10,
                            borderRadius: 10,
                            backgroundColor: "white",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "2px solid red",
                            width: 300
                        }}> <Link to={'contact'}>Контакты</Link></button>
                        <button style={{
                            display: 'flex',
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingBottom: 10,
                            paddingTop: 10,
                            borderRadius: 10,
                            backgroundColor: "white",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "2px solid red",
                            width: 300
                        }}>Каталог</button>
                    </div>
                </div>
            </header>
            <div style={{
                display: "flex",
                flexDirection: "column",
                padding: 20,
                gap: 50
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    padding: 20,
                    borderRadius: 10,
                    marginRight: "auto"
                }}>
                    <span style={{
                        fontSize: 45,
                        fontWeight: 400,
                        color: "red",
                        backgroundColor: "white"
                    }}>Сухие строительные смеси</span>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    padding:20,
                    marginRight: "auto"
                }}>
                    <span style={{
                        fontSize: 30,
                        fontWeight: 400,
                        color: "red",
                        backgroundColor: "white",
                    }}>
                    Производство сухих строительных смесей Евро-Л на сегодняшний день осуществляется силами двух
                    <p style={{
                        backgroundColor: "white",
                    }}>производств , расположенных в городах Белгород (ЦФО) , Таганрог (ЮФО) </p>
                    </span>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
     );
}
 
export default Prew;