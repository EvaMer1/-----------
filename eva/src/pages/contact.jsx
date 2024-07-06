import logo from '../assets/logo.png'
import { Link,Outlet } from 'react-router-dom'

const Contact = () => {
    return(
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
                        }}>Контакты</button>
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
            }}>
            <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    padding: 20,
                    borderRadius: 10,
                    marginRight: "auto",
                    gap:30
                }}>
                    <span style={{
                        fontSize: 45,
                        fontWeight: 400,
                        color: "red",
                        backgroundColor: "white"
                    }}>Наши адреса:</span>
                    </div>
                    <div style ={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "white",
                        padding:20,
                        marginRight: "auto",
                        gap:70
                    }}>
                    <snap style={{
                        background:"white",
                        fontSize:30,
                    }}><p>ООО <b>«Евро-Л Маркет»</b></p>
                    <p>Россия, 308009, г.Белгород</p>
                    <p>ул.Корочанская, 132а</p>
                    <p>тел.: (4722) 56-93-93, 56-94-94</p>
                    e-mail: evro-l@bk.ru</snap>

                    <snap style ={{
                        background:"white",
                        fontSize:30,
                    }}>
                        <p><b>ООО «ЮгСтройСмесь»</b>
                        <p>Россия, 347900, Ростовская область</p>
                        <p>г.Таганрог, Поляковское шоссе, 19/1</p>
                        <p>тел./факс (8634) 43-13-05</p>
                        <p>e-mail: usts1@mail.ru</p></p>
                    </snap>
                    </div>
                    </div>
        </div>
    )
}

export default Contact