import A from "./A";

const Menu = () => {
    return (
        <div className="menu">
            <div className="text1">
                <A href="/home" text="Головна"/>
                <A href="/dnepr" text="Днепр"/>
                <A href="/geografia" text="Географическое положение"/>
                <A href="/histori" text="История"/>
                <A href="/picture" text="Картинки"/>
                <A href="/tacge" text="Также ищут"/>
            </div>
            <img src="/Big_Gerb_fin.png" alt="webDev" className="img1"/>
        </div>
    );
};

export default Menu;