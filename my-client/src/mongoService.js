import axios from "axios";

export async function getMegazin(){
    let data;
    await axios.get('http://localhost:4000/GetAllMagazinByUserId/60dd807d3b3e7d2bd45ada82').then(
        (res)=>{
            data=res.data;
           // console.log(data);
        }
    ).catch(
        (err)=>{
            console.log(err);
        }
    )
}

export async function getUserId(email,password){
    let id;
    await axios.get('אסתי צריכה לכתוב לי פונקציה/email/password').then(
        (res)=>{
            id=res.data.id;
            return id;
        }

    ).catch((err)=>{
        console.log(err);
    })
}

export async function login(name,password,email){
    let user=null;
await axios.get(`http://localhost:4000/login/${name}/${password}/${email}`).then(
    (res)=>{
        user=res.data;
    //   console.log(user)
     
    }
    ).catch((err)=>{
        console.log(err);
        // console.log("lkjhxzZdfghj")
    }) ; 
    return user;
}