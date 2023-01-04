const ConditionalJSX = () => {
    let age = 20;
    let baby = "";
    const tasty = (
        <ul>
            <li>Apple Sauce</li>
            {!baby && <li>Pizza</li>}
            {age>15 && <li>Shubham</li>}
            {age>18 && <li>Sam</li>}
            {age>25 && <li>Sumitra</li>}
        </ul>
    );

    return tasty;
}

export default ConditionalJSX;