import logo from "../assets/logo.png"
import img1 from "../assets/image5.png"
import img2 from "../assets/image6.png"
import "./styles.css"
import { Link,Outlet } from "react-router-dom"

const About = () => {
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
                        }}>О компании</button>
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
                            width: 300,
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
                        }}><Link to ={'contact'}>Контакты</Link></button>
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
                <div>
                    <b style={{
                        fontSize: 45,
                        fontWeight: 600,
                        color: "red",
                        padding: 18,
                        cursor: "pointer"
                    }}>О компании</b>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: 20,
                }}>
                    <img src={img1} alt="" style={{
                        height: 728,
                        width: 917,
                    }} />
                    <span style={{
                        fontSize: 25,
                        fontWeight: 400,
                        color: "black",
                        backgroundColor: "white",
                        marginTop: 20,
                        padding: 20,
                        borderRadius: 20
                    }}>
                        Производство сухих строительных смесей
                        <p>Евро-Л на сегодняшний день осуществляется</p>
                        <p>силами двух производств , расположенных в</p>
                        <p>городах Белгород (ЦФО) , Таганрог (ЮФО)</p>
                        <p>Первым в 2000 году было основано ООО</p>
                        <p>«Полимерстрой» в г.Белгороде. Основным</p>
                        <p>видом деятельности организации является</p>
                        <p>производство сухих строительных смесей и</p>
                        <p>грунтовок.</p>

                        <p>ООО « Полимерстрой» производит смеси по</p>
                        <p>уникальным рецептурам, которые прошли</p>
                        <p>испытания в реальных условиях строительства</p>
                        <p>В тесном сотрудничестве с крупными</p>
                        <p>строительными организациями г. Белгорода,</p>
                        <p>наши смеси приобрели свойства, которые</p>
                        <p>наиболее полно удовлетворяют техническим</p>
                        <p>и экономическим требованиям, предъявляемым</p>
                        <p>к строительным материалам.</p>
                    </span>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: 20,
                }}>
                    <img src={img2} alt="" style={{
                        height: 728,
                        width: 917,
                    }} />
                    <span style={{
                        fontSize: 25,
                        fontWeight: 400,
                        color: "black",
                        backgroundColor: "white",
                        marginTop: 20,
                        padding: 20,
                        borderRadius: 20
                    }}>
                        Смеси «Евро-Л отвечают всем существующим
                        <p>современным требованиям качества и попадают</p>
                        <p>в ценовую категорию, привлекательную для</p>
                        <p>широкого использования. Потребители нашей</p>
                        <p>продукции считают сухие строительные смеси</p>
                        <p>марки «Евро-Л» примером «Золотой середины»</p>
                        <p>в выборе между ценой и качеством.</p>

                        <p>За счет простоты в использовании нашими</p>
                        <p>смесями могут работать как</p>
                        <p>специалисты-отделочники, так и любители,</p>
                        <p>затеявшие ремонт у себя дома.</p>

                        <p>В декабре 2005 года в городе Таганрог,</p>
                        <p>Ростовской области компания</p>
                        <p>ООО «ЮгСтройСмесь» открыла производство по</p>
                        <p>выпуску ССС с маркой «Евро-Л».</p>
                    </span>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 20,
                    backgroundColor: "white",
                    borderRadius: 20
                }}>
                    <span style={{
                        backgroundColor: "white",
                        fontWeight: 400,
                        fontSize: 36
                    }}>
                        До 2005 года сухие смеси «Евро-Л» уже успели занять свое место на рынке ССС в центральной
                        <p>Европейской части России, аоткрытие завода в г. Таганроге позволило «Евро-Л» выйти на</p>
                        <p>рынок юга России</p>
                    </span>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 20,
                    backgroundColor: "white",
                    borderRadius: 20
                }}>
                    <span style={{
                        backgroundColor: "white",
                        fontWeight: 400,
                        fontSize: 36
                    }}>
                        <b>География продаж продукции Евро-Л:</b>Белгород, Брянск, Воронеж, Калуга, Краснодар, Курск,
                        <p>Липецк, Москва, Орел, Тамбов, Тула, Ростов-на-Дону, Рязань, Смоленск, Сочи, Геленджик,</p>
                        <p>Анапа, Новороссийск, Крым,  Волгодонск и т.д.</p>
                    </span>
                </div>
            </div>
            <footer style={{
                display: "flex",
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: 100
            }}>
                <h2 style={{
                    backgroundColor: "white"
                }}>г. Белгород — +7 (4722)56-93-93, 56-94-94</h2>
            </footer>
            <Outlet/>
        </div>
    );
}

export default About;