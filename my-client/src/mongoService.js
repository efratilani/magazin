import axios from "axios";

export async function getMegazin(){
    let data;
    await axios.get('http://localhost:4000/GetAllMagazinByUserId/60dd807d3b3e7d2bd45ada82').then(
        (res)=>{
            data=res.data;
            console.log(data);
        }
    ).catch(
        (err)=>{
            console.log(err);
        }
    )
}