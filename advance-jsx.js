/*const imgObj = [
    {
        src : 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600',
        width : 500,
        title : 'Open now',
        alt : 'Error!'
    },
    {
        src : 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600',
        width : 500,
        title : 'Open now',
        alt : 'Error!'
    },
    {
        src : 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=600',
        width : 500,
        title : 'Open now',
        alt : 'Error!'
    },
    {
        src : 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=600',
        width : 500,
        title : 'Open now',
        alt : 'Error!'
    },
];
*/

const title = "Click Now";
const width = 400;
const height = 400
const alt = "Error";
const pics = [
    "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/34231/antler-antler-carrier-fallow-deer-hirsch.jpg?auto=compress&cs=tinysrgb&w=600",
]

function myFunction(){
    alert("You clicked on an image.");
}


const AdvanceJSX = () =>{

    const images = pics.map(src => <a href={src} target='_blank'><img class='animal-gallery' src={src} width={width} height={height} alt={alt} title={title} /></a>)

    return (
        <div>
            <h1><u>This is advance JSX section</u></h1>

            <div>{images}</div>
            {/* <a href={pics.cat} target="_blank">
                <img src={pics.cat} alt={alt} title={title} width={width} onClick={myFunction}/>
            </a> */}
        </div>
    );
}

export default AdvanceJSX;