const h1 = <h1 align='center'>This is the basic JSX (Javascript + HTML)</h1>;
const p1 = <div><h5>What is Lorem Ipsum?</h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
const p2 = <div><h5>Why do we use it?</h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
const img = <div align='center'><img src="https://t4.ftcdn.net/jpg/00/79/07/81/360_F_79078102_2fa1JMfQY2nsWrYpsegWvHxPWHjwBZl4.jpg"/></div>
const sum = <p>The sum of 3 & 4 is {3+4}</p>

const BascicJSX = () =>{
    return (
        <div>
            {h1}
            {img} 
            {p1}
            {p2}
            {sum}
        </div>
    )
}

export default BascicJSX;